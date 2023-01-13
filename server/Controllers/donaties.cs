using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/donaties")]
[ApiController]
public class DonatiesController : ControllerBase, IController<Donatie>
{
    private readonly theaterContext context;

    public DonatiesController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete(int id)
    {
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
        return context.Donatie.Any(i => i.factuurNr == id);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Donatie>> Get(int id)
    {
        var value = await context.Donatie.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Donatie>>> GetAll()
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
    public async Task<ActionResult> Post(Data<Donatie> data)
    {
        // context.Donatie.Add(data);
        // await context.SaveChangesAsync();

        // return CreatedAtAction("Get", new { id = data.factuurNr }, data);
        return Ok();
    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, Donatie data)
    {
        if (id != data.factuurNr)
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