using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;

[Route("api/signup")]
[ApiController]
public class SignUpController : ControllerBase {

    private readonly theaterContext context;
    private readonly JWT jwt;

    private List<String> commonPasswords;

    public SignUpController(theaterContext _context)
    {
        context = _context;
        jwt = new JWT();

        commonPasswords = new List<string> {
            "123456",
            "password",
            "123456789",
            "12345",
            "12345678",
            "qwerty",
            "1234567",
            "111111",
            "1234567890",
            "123123",
        };
    }

    [HttpPost]
    public async Task<ActionResult> Post([FromBody]GebruikerData data)
    {
        var ww = data.loginGegevens.wachtwoord;

        // o Geen herhalende patronen
        if(EncryptionTools.isPattern(ww)) {
            return BadRequest("Wachtwoord mag geen patroon bevatten");
        }

        // o Niet gelijk aan de inlognaam
        if(data.loginGegevens.email.Split("@")[0] == ww ) {
            return BadRequest("Wachtwoord mag niet gelijk zijn aan de inlognaam");
        }

        // o Niet in de top-10 lijst van veel voorkomende wachtwoorden (zoalsqwerty123!)
        if(commonPasswords.Contains(ww)) {
            return BadRequest("Wachtwoord is niet sterk genoeg");
        }

        // o Minimaal 7 karakters
        if(ww.Length < 7) {
            return BadRequest("Wachtwoord moet minimaal 7 karakters bevatten");
        }

        // o Minimaal 1 hoofdletter
        if(!EncryptionTools.hasUppercase(ww)) {
            return BadRequest("Wachtwoord moet minimaal 1 hoofdletter bevatten");
        }

        // o Minimaal 1 kleine letter
        if(!EncryptionTools.hasLowercase(ww)) {
            return BadRequest("Wachtwoord moet minimaal 1 kleine letter bevatten");
        }
        // o Minimaal 1 speciaal karakter
        if(!EncryptionTools.hasSpecialCharacter(ww)) {
            return BadRequest("Wachtwoord moet minimaal 1 speciaal karakter bevatten");
        }

        // o Geen woorden (gebruik een woordenboek, je kunt dat gewoon downloaden)
        if(EncryptionTools.isWord(ww)) {
            return BadRequest("Wachtwoord mag geen woord zijn");
        }

        var passwordHash = EncryptionTools.hashPassword(ww);
        var nieuweGebruiker = new Gebruiker {
            naam = data.naam,

            // todo check voor leeftijdsgroep
            leeftijdsGroep = LeeftijdsGroep.Volwassenen,
            level = level.bezoeker,
            loginGegevens = new LoginGegevens
            {
                wachtwoord = passwordHash,
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