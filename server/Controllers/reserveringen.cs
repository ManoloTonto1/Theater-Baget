using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/reserveringen")]
[ApiController]
public class ReserveringenController : ControllerBase, IController<Reservering, ReserveringData>
{
    private readonly theaterContext context;
    private readonly JWT jwt;

    public ReserveringenController(theaterContext _context)
    {
        context = _context;
        jwt = new JWT();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete([FromHeader(Name = "Authorization")] string token, int id)
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
    public async Task<ActionResult<Reservering>> Get([FromHeader(Name = "Authorization")] string token, int id)
    {
        var value = await context.Reservering.FindAsync(id);
        return value == null ? NotFound() : value;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Reservering>>> GetAll([FromHeader(Name = "Authorization")] string token)
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
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token, [FromBody] ReserveringData data)
    {
        var user = new Gebruiker
            {
                naam = "Anoniem",
                level = level.bezoeker,
                leeftijdsGroep = LeeftijdsGroep.Volwassenen,
            };

        if (data.userId != null)
        {
            var (isValid, _token) = jwt.validateToken(token);
            if (!isValid)
            {
                return Unauthorized();
            }
            user = await context.Gebruiker.FindAsync(data.userId);
        }

        var newData = new Reservering
        {
            aankoopDatum = DateTime.Today,
            owner = user,
            stoelen = data.stoelen,
            programmering = await context.Programmering.FindAsync(data.programmeringId),
            bestelling = new Bestelling
            {
                factuurNr = data.referenceCode,
                korting = 0,
                prijs = data.amountPaid,
                owner = user,
            },
        };
        context.Reservering.Add(newData);
        await context.SaveChangesAsync();

        // should return a ticket, with info ect.
        return CreatedAtAction("Get", new { data.userId }, newData);
    }

    [HttpPut("{id}")]

    public async Task<ActionResult> Put([FromHeader(Name = "Authorization")] string token, int id, [FromBody] ReserveringData data)
    {
        var role = jwt.getRoleFromToken(token);
        if(role != level.admin){
            return Unauthorized();
        }

        if (id != data.userId)
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