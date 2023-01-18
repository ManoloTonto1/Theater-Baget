using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/donaties")]
[ApiController]
public class DonatiesController : ControllerBase, IController<Donatie, DonatieData>
{
    private readonly theaterContext context;
    private readonly JWT jwt;

    public DonatiesController(theaterContext _context)
    {
        context = _context;
        jwt = new JWT();
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete([FromHeader(Name = "Authorization")] string token, int id)
    {
        var role = jwt.getRoleFromToken(token);
        if (role != level.admin)
        {
            return Unauthorized();
        }
        var item = await context.Donatie.FindAsync(id);
        if (item == null)
        {
            return NotFound();
        }

        context.Donatie.Remove(item);
        await context.SaveChangesAsync();

        return NoContent();
    }

    public bool Exists(int id)
    {
        return context.Donatie.Any(i => i.id == id);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Donatie>> Get([FromHeader(Name = "Authorization")] string token, int id)
    {
        var role = jwt.getRoleFromToken(token);
        if (role != level.admin)
        {
            return Unauthorized();
        }
        var value = await context.Donatie.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Donatie>>> GetAll([FromHeader(Name = "Authorization")] string token)
    {
        var value = await context.Donatie.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Donatie.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token, [FromBody] DonatieData data)
    {

        var user = new Gebruiker
        {
            naam = "Anoniem",
            level = level.bezoeker,
            leeftijdsGroep = LeeftijdsGroep.Volwassenen,
        };

        if (data.userId != null)
        {
            var (isValid, _) = jwt.validateToken(token);
            if (!isValid)
            {
                return Unauthorized();
            }
            user = await context.Gebruiker.FindAsync(data.userId);
        }

        var newData = new Donatie
        {
            factuurNr = data.factuurNr,
            message = data.message,
            prijs = data.prijs,
            owner = user,
        };
        context.Donatie.Add(newData);
        await context.SaveChangesAsync();

        // should return a ticket, with info ect.
        return CreatedAtAction("Get", new { data.userId }, newData);
    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put([FromHeader(Name = "Authorization")] string token, int id, [FromBody] DonatieData data)
    {
        var role = jwt.getRoleFromToken(token);
        if (role != level.admin)
        {
            return Unauthorized();
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