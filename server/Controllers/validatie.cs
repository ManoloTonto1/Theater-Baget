using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/validate")]
[ApiController]
public class ValidationController : ControllerBase
{
    private readonly theaterContext context;
    private readonly JWT jwt = new JWT();

    public ValidationController(theaterContext _context)
    {
        context = _context;
    }
    [HttpGet]
    public async Task<ActionResult> Get([FromHeader(Name = "Authorization")] string token)
    {
        if(token == null || token == ""){
            return Unauthorized();
        };

        var result = await jwt.validateToken(token);
        if (!result.Item1)
        {
            return Unauthorized();
        }
        return Ok();
    }
    [HttpGet("user")]
    public async Task<ActionResult> GetUser([FromHeader(Name = "Authorization")] string token)
    {
        if(token == null || token == ""){
            return Unauthorized();
        };

        var result = await jwt.validateToken(token);
        if (!result.Item1)
        {
            return Unauthorized();
        }
        var userIdFromToken = Convert.ToInt16(result.Item2.Claims.First(x => x.Type.Contains("id")).Value);
        var user = await context.Gebruiker.Where(g => g.id == userIdFromToken).Include(g=>g.loginGegevens).FirstAsync();
        var loggedInUser = new loggedInUserData
        {
            gebruiker = user
        };
        return Ok(loggedInUser);
    }
}