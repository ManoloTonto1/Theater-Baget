using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/groepen")]
[ApiController]
public class GroepenController : ControllerBase, IController<Groep,Groep>
{
    private readonly theaterContext context;
    private readonly JWT jwt;

    public GroepenController(theaterContext _context)
    {
        context = _context;
        jwt = new JWT();
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete([FromHeader(Name = "Authorization")]string token,int id)
    {
        var role = await jwt.getRoleFromToken(token);
        var thisGroup = await context.Groep.FindAsync(id);
        if (thisGroup == null){
            return BadRequest();
        }
        
        if (role != level.admin)
        {
            var user = await jwt.getUserFromToken(token);
            var thisUser = await context.Betrokkene.Where(b => b.id == user && b.groepen.Find(g => g.id == id) == thisGroup).FirstAsync();
            if (thisUser == null || thisUser.naam == "")
            {
                return BadRequest();
            }
        }
        
        var item = await context.Groep.FindAsync(id);
        if (item == null)
        {
            return NotFound();
        }

        context.Groep.Remove(item);
        await context.SaveChangesAsync();

        return NoContent();
    }

    public bool Exists(int id)
    {
        return context.Groep.Any(i => i.id == id);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Groep>> Get([FromHeader(Name = "Authorization")]string token,int id)
    {
        var value = await context.Groep.Include(g=>g.betrokkenen).Include(g=>g.programmeringen).ThenInclude(p => p.zaal).Where(g => g.id == id).FirstAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("naam/{name}")]
    public async Task<ActionResult<IEnumerable<Groep>>> GetByName([FromHeader(Name = "Authorization")]string token,string name)
    {
        var value = from s in context.Groep
                    where EF.Functions.Like(s.naam.ToLower(), "%"+name.ToLower()+"%")
                    select s;
        return value == null ? NoContent() : await value.Include(g=>g.betrokkenen).Include(g=>g.programmeringen).ThenInclude(p => p.zaal).ToListAsync();
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Groep>>> GetAll([FromHeader(Name = "Authorization")]string token)
    {
        var value = await context.Groep.Include(g => g.betrokkenen).Include(g=>g.programmeringen).ThenInclude(p => p.zaal).ToListAsync();
        return value == null ? NoContent() : value;
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Groep.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")]string token,[FromBody] Groep data)
    {
        var role = await jwt.getRoleFromToken(token);
        if (role != level.admin || role != level.bandlid || role != level.medewerker)
        {
            return Unauthorized();
        }
        context.Groep.Add(data);
        await context.SaveChangesAsync();

        return CreatedAtAction("Get", new { data.id }, data);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Put([FromHeader(Name = "Authorization")]string token,int id, Groep data)
    {
        var role = await jwt.getRoleFromToken(token);
        var thisGroup = await context.Groep.FindAsync(id);
        if (thisGroup == null){
            return BadRequest();
        }
        
        if (role != level.admin)
        {
            var user = await jwt.getUserFromToken(token);
            var thisUser = await context.Betrokkene.Where(b => b.id == user && b.groepen.Find(g => g.id == id) == thisGroup).FirstAsync();
            if (thisUser == null || thisUser.naam == "")
            {
                return BadRequest();
            }
        }

        context.Entry(data).State = EntityState.Modified;

        try
        {
            await context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!Exists(id))
            {
                return NotFound();
            }
            throw;
        }

        return NoContent();
    }
}