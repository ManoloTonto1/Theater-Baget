using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/validate")]
[ApiController]
public class ValidationController : ControllerBase
{
    Jwt jwt = new Jwt();

    private readonly theaterContext context;

    public ValidationController(theaterContext _context)
    {
        context = _context;
    }
    [HttpPost]
    public async Task<ActionResult> Post(ValidationData data)
    {
        bool result = jwt.ValidateToken(data.token);

        if(result) {
            return Ok(result);
        }
        return BadRequest();
    }
}