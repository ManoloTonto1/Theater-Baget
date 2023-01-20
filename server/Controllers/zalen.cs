using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/zalen")]
[ApiController]
public class ZalenController : ControllerBase, IController<Zaal,Zaal>
{
    private readonly theaterContext context;
    private readonly JWT auth;

    public ZalenController(theaterContext _context)
    {
        context = _context;
        auth = new JWT();
    }

    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete([FromHeader(Name = "Authorization")] string token,int id)
    {
        var role = auth.getRoleFromToken(token);
        if (role != level.admin || role != level.medewerker)
        {
            return Unauthorized();
        }
        var zaal = await context.Zaal.FindAsync(id);
        if (zaal == null)
        {
            return NotFound();
        }

        context.Zaal.Remove(zaal);
        await context.SaveChangesAsync();

        return NoContent();
    }

    public bool Exists(int id)
    {
        return context.Zaal.Any(i => i.zaalNr == id);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Zaal>> Get([FromHeader(Name = "Authorization")] string token,int id)
    {
        var value = await context.Zaal.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Zaal>>> GetAll([FromHeader(Name = "Authorization")] string token)
    {
        var value = await context.Zaal.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Zaal.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token, [FromBody]Zaal data)
    {
        var role = auth.getRoleFromToken(token);
        if ((int)role == (int)level.admin || (int)role == (int)level.medewerker)
        {
            var newData = new Zaal
            {
            eersterangsAantal = data.eersterangsAantal,
            tweederangsAantal = data.tweederangsAantal,
            derderangsAantal = data.derderangsAantal,
            soort = data.soort,
        };
        context.Zaal.Add(newData);
        await context.SaveChangesAsync();

        return CreatedAtAction("Get", new { id = data.zaalNr }, data);
        }
        return Unauthorized();
    }
    
    [HttpPut("{id}")]
    public async Task<ActionResult> Put([FromHeader(Name = "Authorization")] string token,int id, [FromBody] Zaal data)
    {
        var role = auth.getRoleFromToken(token);
        if (role != level.admin || role != level.medewerker)
        {
            return Unauthorized();
        }
        if(!Exists(id)){
            return NotFound();
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