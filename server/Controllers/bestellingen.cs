using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/bestellingen")]
[ApiController]
public class BestellingenController : ControllerBase, IController<Bestelling,Bestelling>
{
    private readonly theaterContext context;

    public BestellingenController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete([FromHeader(Name = "Authorization")]string token,int id)
    {
        var item = await context.Bestelling.FindAsync(id);
        if (item == null)
        {
            return NotFound();
        }

        context.Bestelling.Remove(item);
        await context.SaveChangesAsync();

        return NoContent();
    }

    public bool Exists(int id)
    {
        return context.Bestelling.Any(i => i.id == id);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Bestelling>> Get([FromHeader(Name = "Authorization")]string token,int id)
    {
        var value = await context.Bestelling.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Bestelling>>> GetAll([FromHeader(Name = "Authorization")]string token)
    {
        var value = await context.Bestelling.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Bestelling.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")]string token,Bestelling data)
    {
        // context.Bestelling.Add(data);
        // await context.SaveChangesAsync();

        // return CreatedAtAction("Get", new { id = data.factuurNr }, data);
        return Ok();
    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put([FromHeader(Name = "Authorization")]string token,int id, Bestelling data)
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