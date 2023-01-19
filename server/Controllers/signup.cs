using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;

[Route("api/signup")]
[ApiController]
public class SignUpController : ControllerBase {

    private readonly theaterContext context;
    private readonly JWT jwt;

    public SignUpController(theaterContext _context)
    {
        context = _context;
        jwt = new JWT();
    }

    [HttpPost]
    // public async Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token, [FromBody] ProgrammeringData data)
    public async Task<ActionResult> Post([FromBody]GebruikerData data)
    {
        var nieuweGebruiker = new Gebruiker {
            naam = data.naam,

            // todo check voor leeftijdsgroep
            leeftijdsGroep = LeeftijdsGroep.Volwassenen,
            level = level.bezoeker,
            loginGegevens = new LoginGegevens
            {
                wachtwoord = data.loginGegevens.wachtwoord,
                email = data.loginGegevens.email,
                twoFactor = data.loginGegevens.twoFactor,
            }
        };
        
        // check if user does not already exist
        var userExistCheck = context.Gebruiker.Where(x => x.loginGegevens.email == data.loginGegevens.email).FirstOrDefault();;

        if (userExistCheck != null) {
            return BadRequest("Deze email is al in gebruik");
        }

        context.Gebruiker.Add(nieuweGebruiker);
        await context.SaveChangesAsync();

        return Ok();
    }
}