using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/programmeringen")]
[ApiController]
public class ProgrammeringenController : ControllerBase, IController<Programmering, ProgrammeringData>
{
    private readonly theaterContext context;
    private readonly Jwt jwt;

    public ProgrammeringenController(theaterContext _context)
    {
        context = _context;
        jwt = new Jwt();

        // Seeds the Db
        new Seed(_context);
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete([FromHeader(Name = "Authorization")] string token, int id)
    {
        var role = jwt.getRoleFromToken(token);
        if (role != level.admin | role != level.medewerker)
        {
            return Unauthorized();
        }

        var item = await context.Programmering.FindAsync(id);
        if (item == null)
        {
            return NotFound();
        }

        context.Programmering.Remove(item);
        await context.SaveChangesAsync();

        return NoContent();
    }

    public bool Exists(int id)
    {
        return context.Programmering.Any(i => i.id == id);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Programmering>> Get([FromHeader(Name = "Authorization")] string token, int id)
    {
        var value = await context.Programmering.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Programmering>>> GetAll([FromHeader(Name = "Authorization")] string token)
    {
        var value = await context.Programmering.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Programmering>>> GetByDate([FromBody]string date)
    {
        var value = await context.Programmering.Where(p => p.datum.ToShortDateString() == DateTime.Parse(date).ToShortDateString()).ToListAsync();
        return value == null ? NotFound() : value;
    }

    [HttpGet("/count")]
    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Programmering.CountAsync();
    }

    [HttpPost]
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token, [FromBody] ProgrammeringData data)
    {
        var role = jwt.getRoleFromToken(token);
        if (role != level.admin | role != level.medewerker)
        {
            return Unauthorized();
        }

        var date = DateTime.Parse(data.datum);
        var newData = new Programmering
        {
            titel = data.titel,
            datum = date,
            afbeelding = data.afbeelding,
            omschrijving = data.omschrijving,

        };
        context.Programmering.Add(newData);
        await context.SaveChangesAsync();

        return CreatedAtAction("Get", new { newData.id }, newData);
    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put([FromHeader(Name = "Authorization")] string token, int id, [FromBody] ProgrammeringData data)
    {
        var role = jwt.getRoleFromToken(token);
        if (role != level.admin | role != level.medewerker)
        {
            return Unauthorized();
        }
        if (id != data.id)
        {
            return BadRequest();
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