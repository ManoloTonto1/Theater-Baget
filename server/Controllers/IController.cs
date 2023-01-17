using Microsoft.AspNetCore.Mvc;
namespace server.Controllers;

public interface IController<T, DT>
{
    public Task<ActionResult<T>> Get([FromHeader(Name = "Authorization")] string token, int id);
    public Task<ActionResult<IEnumerable<T>>> GetAll([FromHeader(Name = "Authorization")] string token);
    public Task<ActionResult<int>> GetCount();
    public Task<ActionResult> Put([FromHeader(Name = "Authorization")] string token, int id, [FromBody] DT data);
    public Task<ActionResult> Post([FromHeader(Name = "Authorization")] string token, [FromBody] DT data);
    public Task<ActionResult> Delete([FromHeader(Name = "Authorization")] string token,int id);
    public bool Exists(int id);
}
