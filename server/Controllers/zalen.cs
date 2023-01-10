using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/zalen")]
[ApiController]
public class ZalenController : ControllerBase, IController<Zaal>
{
    private readonly theaterContext context;

    public ZalenController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete(int id)
    {
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
    public async Task<ActionResult<Zaal>> Get(int id)
    {
        var value = await context.Zaal.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Zaal>>> GetAll()
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
    public async Task<ActionResult> Post(Zaal data)
    {
        context.Zaal.Add(data);
        await context.SaveChangesAsync();

        return CreatedAtAction("Get", new { id = data.zaalNr }, data);
    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, Zaal data)
    {
        if (id != data.zaalNr)
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