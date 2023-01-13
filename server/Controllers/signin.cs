using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/signin")]
[ApiController]
public class SignInController : ControllerBase
{
    
    Database db = new Database();
    Jwt jwt = new Jwt();

    private readonly theaterContext context;

    public SignInController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]
    public bool Exists(int id)
    {
        return true;
    }
    [HttpPost]
    public async Task<ActionResult> Post(SignInData data)
    {
        var request = db.authenticate(data.email, data.password);
 
        if(request) {
            var token = jwt.CreateToken(data.email);
            return Ok(token);
        }
        return BadRequest();
    }
}