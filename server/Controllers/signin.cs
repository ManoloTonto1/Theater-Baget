using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/signin")]
[ApiController]
public class SignInController : ControllerBase
{

    readonly JWT jwt;

    private readonly theaterContext context;

    public SignInController(theaterContext _context)
    {
        context = _context;
        jwt = new JWT();
    }
    [HttpPost]
    public async Task<ActionResult> Post([FromBody]SignInData data)
    {
        var user = await context.Gebruiker.Where(
            g => g.loginGegevens.email == data.email &&
            g.loginGegevens.wachtwoord == data.password).Include(g=>g.loginGegevens).FirstAsync();
        
        if (user == null)
        {
            return BadRequest();
        };
        
        var token = jwt.CreateUserToken(user, data.persistentLogin);
        var loggedInUser = new loggedInUserData
        {
            token = token,
            gebruiker = user
        };
        return Ok(loggedInUser);
    }
}