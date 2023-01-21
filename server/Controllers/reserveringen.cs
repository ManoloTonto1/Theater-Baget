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
        var value = await context.Reservering.Include(r=>r.stoelen).FirstOrDefaultAsync(i => i.id == id);
        return value == null ? NotFound() : value;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Reservering>>> GetAll([FromHeader(Name = "Authorization")] string token)
    {
        var value = await context.Reservering.Include(r=>r.stoelen).ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("user/{id}")]
    public async Task<ActionResult<IEnumerable<Reservering>>> GetByUserId([FromHeader(Name = "Authorization")] string token,int id)
    {
        var value = await context.Reservering.Include(r => r.stoelen).Where(r => r.owner.id == id).ToListAsync();
        return value == null ? NotFound() : value;
    }
    [HttpGet("datum/{datum}")]
    public async Task<ActionResult<IEnumerable<Reservering>>> GetAllByDate([FromHeader(Name = "Authorization")] string token,[FromHeader(Name = "datum")]string datum)
    {
        var date = Convert.ToDateTime(datum).Date;
        var value = await context.Reservering.Where(p => p.betaling.aankoopDatum>=date && p.betaling.aankoopDatum < date.AddDays(1)).Include(p=>p.zaal).Include(p=>p.betaling).ToListAsync();
        return value == null ? NoContent() : value;
    }


    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return await context.Reservering.CountAsync();
    }
    [HttpPost]
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token, [FromBody] ReserveringData data)
    {
        var currentProgramma = await context.Programmering.Include(p=>p.zaal).FirstOrDefaultAsync(p => p.id == data.programmeringId);
        if (currentProgramma == null)
        {
            return NotFound();
        }
        var user = new Gebruiker
        {
            naam = "Anoniem",
            level = level.bezoeker,
            leeftijdsGroep = LeeftijdsGroep.Volwassenen,
        };

        var stoelen = new List<Stoel>();
        foreach (var stoel in data.stoelen)
        {
            stoelen.Add(new Stoel
            {
                value = stoel,
            });
        }
        
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
            owner = user,
            stoelen = stoelen,
            programmering = currentProgramma,
            betaling = new Betaling
            {
                aankoopDatum = DateTime.Today,
                factuurNr = data.referenceCode,
                prijs = data.amountPaid,
                korting = 0,
            },
            zaal = currentProgramma.zaal,

        };
        context.Reservering.Add(newData);
        await context.SaveChangesAsync();

        // should return a ticket, with info ect.
        // return CreatedAtAction("Get", new { data.userId }, newData);
        return Ok();
    }

    [HttpPut("{id}")]

    public async Task<ActionResult> Put([FromHeader(Name = "Authorization")] string token, int id, [FromBody] ReserveringData data)
    {
        var role = jwt.getRoleFromToken(token);
        if (role != level.admin)
        {
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