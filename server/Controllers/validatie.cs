using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/validate")]
[ApiController]
public class ValidationController : ControllerBase
{
    JWT jwt = new JWT();
    
    public ValidationController(theaterContext _context)
    {
    }
    [HttpPost]
    public async Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token)
    {
        if(token == null || token == ""){
            return Unauthorized();
        };

        var result = jwt.validateToken(token);

        if (!result.Item1)
        {
            return Unauthorized();
        }
        return Ok(result);
    }
}