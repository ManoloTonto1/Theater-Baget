using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/signin")]
[ApiController]
public class SignInController : ControllerBase, IController<SignInData>
{
    
    Database db = new Database();
    Jwt jwt = new Jwt();

    private readonly theaterContext context;

    public SignInController(theaterContext _context)
    {
        context = _context;
    }
    [HttpDelete("{id}")]

    public async Task<ActionResult> Delete(int id)
    {
        return Ok();
    }

    public bool Exists(int id)
    {
        return true;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<SignInData>> Get(int id)
    {
        return Ok();
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SignInData>>> GetAll()
    {
        return Ok();
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return Ok();
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

    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, SignInData data)
    {
        return Ok();
    }
}