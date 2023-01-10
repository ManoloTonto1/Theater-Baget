using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/reserveringen")]
[ApiController]
public class ReserveringenController : ControllerBase, IController<Reservering>
{
    private readonly theaterContext context;

    public ReserveringenController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete(int id)
    {
        var item = await context.Reservering.FindAsync(id);
        if (item == null)
        {
            return NotFound();
        }

        context.Reservering.Remove(item);
        await context.SaveChangesAsync();

        return NoContent();
    }

    public bool Exists(int id)
    {
        return context.Reservering.Any(i => i.id == id);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Reservering>> Get(int id)
    {
        var value = await context.Reservering.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Reservering>>> GetAll()
    {
        var value = await context.Reservering.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Reservering.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post(Reservering data)
    {
        context.Reservering.Add(data);
        await context.SaveChangesAsync();

        return CreatedAtAction("Get", new { data.id }, data);
    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, Reservering data)
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