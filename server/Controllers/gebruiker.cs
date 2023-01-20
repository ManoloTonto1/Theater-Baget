using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/gebruikers")]
[ApiController]
public class GebruikerenController : ControllerBase, IController<Gebruiker, GebruikerData>
{
    private readonly theaterContext context;
    private readonly JWT jwt;

    public GebruikerenController(theaterContext _context)
    {
        context = _context;
        jwt = new JWT();
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete([FromHeader(Name = "Authorization")] string token, int id)
    {
        var item = await context.Gebruiker.FindAsync(id);
        if (item == null)
        {
            return NotFound();
        }

        context.Gebruiker.Remove(item);
        await context.SaveChangesAsync();

        return NoContent();
    }

    public bool Exists(int id)
    {
        return context.Gebruiker.Any(i => i.id == id);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Gebruiker>> Get([FromHeader(Name = "Authorization")] string token, int id)
    {
        var value = await context.Gebruiker.Include( g => g.reserveringen).Where( g => g.id == id).FirstAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Gebruiker>>> GetAll([FromHeader(Name = "Authorization")] string token)
    {
        var value = await context.Gebruiker.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Gebruiker.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token, GebruikerData data)
    {
        var role = jwt.getRoleFromToken(token);
        if (role != level.admin)
        {
            return BadRequest();
        }
        var newData = new Gebruiker
        {
            naam = data.naam,
            level = data.level,
            loginGegevens = data.loginGegevens,
            leeftijdsGroep = data.leeftijdsGroep,
        };
        
        context.Gebruiker.Add(newData);
        await context.SaveChangesAsync();

        return Ok();
    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put([FromHeader(Name = "Authorization")] string token, int id, [FromBody]GebruikerData data)
    {
        var role = jwt.getRoleFromToken(token);
        if (role != level.admin)
        {
            if (!jwt.validateUserFromToken(token, id))
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