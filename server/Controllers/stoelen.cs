using System.Net.WebSockets;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;

public class StoelenController : Hub
{
    private readonly theaterContext context;
    private readonly List<string> defaultUsedChairs;
    public StoelenController(theaterContext _context)
    {
        context = _context;
        defaultUsedChairs = context.stoelen.Where(s => s.reservering.programmering.id == id).Select(s=>s.value).ToList();
    }
    public async Task Get(int id, string user,string message)
    {
        //keep track of the current users and what they choose.
        
        await Clients.All.SendAsync("receiveMessage", user,message, defaultUsedChairs );

    }
}