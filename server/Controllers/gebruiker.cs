using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("/gebruikers")]
[ApiController]
public class GebruikerenController : ControllerBase, IController<Gebruiker>
{
    private readonly theaterContext context;

    public GebruikerenController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete(int id)
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
    public async Task<ActionResult<Gebruiker>> Get(int id)
    {
        var value = await context.Gebruiker.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Gebruiker>>> GetAll()
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
    public async Task<ActionResult> Post(Gebruiker data)
    {
        context.Gebruiker.Add(data);
        await context.SaveChangesAsync();

        return CreatedAtAction("Get", new { data.id }, data);
    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, Gebruiker data)
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