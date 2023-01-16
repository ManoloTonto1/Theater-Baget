using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/groepen")]
[ApiController]
public class GroepenController : ControllerBase, IController<Groep,GroepData>
{
    private readonly theaterContext context;

    public GroepenController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete(int id)
    {
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
    public async Task<ActionResult<Groep>> Get(int id)
    {
        var value = await context.Groep.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet("{name}")]
    public async Task<ActionResult<Groep>> GetByName(string name)
    {
        var value = await context.Groep.Where(g => g.naam == name).FirstAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Groep>>> GetAll()
    {
        var value = await context.Groep.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Groep.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] GroepData data)
    {
        var newData = new Groep
        {
            naam = data.naam,
            afbeelding = data.afbeelding,
            omschrijving = data.omschrijving,
            websiteUrl = data.websiteUrl
        };
        context.Groep.Add(newData);
        await context.SaveChangesAsync();

        return CreatedAtAction("Get", new { newData.id }, newData);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, Groep data)
    {
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