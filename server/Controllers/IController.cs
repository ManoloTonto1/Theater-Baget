using Microsoft.AspNetCore.Mvc;
namespace server.Controllers;

public interface IController<T>
{
    public Task<ActionResult<T>> Get(int id);
    public Task<ActionResult<IEnumerable<T>>> GetAll();
    public Task<ActionResult<int>> GetCount();
    public Task<ActionResult> Put(int id, T data);
    public Task<ActionResult> Post([FromBody] T data);
    public Task<ActionResult> Delete(int id);
    public bool Exists(int id);
}