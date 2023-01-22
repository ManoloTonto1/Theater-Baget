using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/programmeringen")]
[ApiController]
public class ProgrammeringenController : ControllerBase, IController<Programmering, ProgrammeringData>
{
    private readonly theaterContext context;
    private readonly JWT jwt;

    public ProgrammeringenController(theaterContext _context)
    {
        context = _context;
        jwt = new JWT();

        // Seeds the Db
        new Seed(_context);
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete([FromHeader(Name = "Authorization")] string token, int id)
    {
        var role = await jwt.getRoleFromToken(token);
        if (role != level.admin || role != level.medewerker)
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
        var value = await context.Programmering.Include(p => p.zaal).Where(p => p.id == id).FirstAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Programmering>>> GetAll([FromHeader(Name = "Authorization")] string token)
    {
        var value = await context.Programmering.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("datum")]
    public async Task<ActionResult<IEnumerable<Programmering>>> GetByDate([FromHeader(Name = "datum")] string datum)
    {
        var date = Convert.ToDateTime(datum).Date;
        var value = await context.Programmering.Where(p => p.datum >= date && p.datum < date.AddDays(1)).Include(p => p.zaal).ToListAsync();
        return value == null ? NoContent() : value;
    }

    [HttpGet("count")]
    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Programmering.CountAsync();
    }

    [HttpPost]
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token, [FromBody] ProgrammeringData data)
    {
        var role = await jwt.getRoleFromToken(token);
        if ((int)role == (int)level.admin || (int)role == (int)level.medewerker)
        {
            var date = DateTime.Parse(data.datum);
            var zaal = await context.Zaal.Where(z => z.zaalNr == data.zaalNr).FirstAsync();
            var newData = new Programmering
            {
                titel = data.titel,
                datum = date,
                afbeelding = data.afbeelding,
                omschrijving = data.omschrijving,
                prijs = data.prijs,
                zaal = zaal
            };
            context.Programmering.Add(newData);
            await context.SaveChangesAsync();

            return CreatedAtAction("Get", new { newData.id }, newData);

        }

        return Unauthorized();


    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put([FromHeader(Name = "Authorization")] string token, int id, [FromBody] ProgrammeringData data)
    {
        var role = await jwt.getRoleFromToken(token);
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