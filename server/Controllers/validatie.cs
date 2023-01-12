using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;
[Route("api/validate")]
[ApiController]
public class ValidationController : ControllerBase, IController<ValidationData>
{
    Jwt jwt = new Jwt();

    private readonly theaterContext context;

    public ValidationController(theaterContext _context)
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
    public async Task<ActionResult<ValidationData>> Get(int id)
    {
        return Ok();
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ValidationData>>> GetAll()
    {
        return Ok();
    }
    [HttpGet("/count")]

    public async Task<ActionResult<int>> GetCount()
    {
        return Ok();
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
    
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, ValidationData data)
    {
        return Ok();
    }
}