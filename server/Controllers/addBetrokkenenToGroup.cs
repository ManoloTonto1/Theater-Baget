using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/betrokkenenToevoegen")]
[ApiController]
public class AddBetrokkenenToGroupController : ControllerBase {   
    
    private readonly theaterContext context;

    public AddBetrokkenenToGroupController(theaterContext _context)
    {
        context = _context;
    }

    [HttpPost]
    public async Task<ActionResult> Post(BetrokkeneToGroup data)
    {
        Betrokkene betrokkene = new Betrokkene {
            leeftijdsGroep = data.betrokkene.leeftijdsGroep,
            naam= data.betrokkene.naam,
            level = data.betrokkene.level,
            // loginGegevens = new LoginGegevens
            // {
            //     wachtwoord = data.betrokkene.loginGegevens.wachtwoord,
            //     email = data.betrokkene.loginGegevens.email,
            //     twoFactor = false
            // }

        };

        // Groep groep = new Groep {
        //     naam = data.groep.naam,
        //     websiteUrl = data.groep.websiteUrl,
        //     omschrijving = data.groep.omschrijving,
        //     afbeelding = data.groep.afbeelding,
        //     betrokkenen = data.groep.betrokkenen,
        // };

        // Betrokkene betrokkene = context.Betrokkene.Where(b => b.id == data.betrokkene.id).FirstOrDefault();
        Groep groep = context.Groep.Where(g => g.id == data.groep.id).FirstOrDefault();

        betrokkene.groepen.Add(groep);
        // groep.betrokkenen.Add(betrokkene);

        await context.SaveChangesAsync();

        return Ok();
    }
}