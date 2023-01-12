using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Text;

namespace server.Controllers;
[Route("api/programmeringen")]
[ApiController]
public class ProgrammeringenController : ControllerBase, IController<Programmering>
{
    private readonly theaterContext context;

    public ProgrammeringenController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete(int id)
    {
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
    public async Task<ActionResult<Programmering>> Get(int id)
    {
        var value = await context.Programmering.FindAsync(id);
        return value == null ? NotFound() : value;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Programmering>>> GetAll()
    {
        var value = await context.Programmering.ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Programmering.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post(Programmering data)
    {
        context.Programmering.Add(data);
        await context.SaveChangesAsync();

        return CreatedAtAction("Get", new { data.id }, data);
    }

    [HttpPost("excel")]
    public async Task<ActionResult> PostExcel()
    {

        var fh = new FileHandler();
        fh.transformExcelToData(Request.Body);

        return Ok();
        //Create COM Objects. Create a COM object for everything that is referenced
        // make a new file then 
        // write bytes to the file
        // var file

        // context.Programmering.Add(data);
        // await context.SaveChangesAsync();

        // return CreatedAtAction("Get", new { data.id }, data);

    }
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, Programmering data)
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