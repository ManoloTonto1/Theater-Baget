using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("/betrokkenen")]
[ApiController]
public class BetrokkenenController : ControllerBase, IController<Betrokkene>
{
    private readonly theaterContext context;

    public BetrokkenenController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete(int id)
    {
        var item = await context.Betrokkene.FindAsync(id);
        if (item == null)
        {
            return NotFound();
        }

        context.Betrokkene.Remove(item);
        await context.SaveChangesAsync();

        return NoContent();
    }

    public bool Exists(int id)
    {
        return context.Betrokkene.Any(i => i.id == id);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Betrokkene>> Get(int id)
    {
        var value = await context.Betrokkene.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Betrokkene>>> GetAll()
    {
        var value = await context.Betrokkene.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Betrokkene.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post(Betrokkene data)
    {
        context.Betrokkene.Add(data);
        await context.SaveChangesAsync();

        return CreatedAtAction("Get", new { data.id }, data);
    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, Betrokkene data)
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