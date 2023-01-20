using System.Net.WebSockets;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;

public class StoelenController : Hub
{
    private CurrentSeatContext unusedChairsContext = CurrentSeatContext.Instance;
    private IServiceProvider _sp;
    // private CurrentSeatContext seatContext = CurrentSeatContext.Instance;
    public StoelenController(IServiceProvider sp)
    {
        _sp = sp;

    }
    public async Task GetDefault(int id)
    {
        // add user to the group of the current ticket Program id
        await Groups.AddToGroupAsync(Context.ConnectionId, id.ToString());

        using (var scope = _sp.CreateAsyncScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<theaterContext>();
            var ctx = unusedChairsContext.Get();
            if(ctx.Count == 0){
                await unusedChairsContext.Update(await context.stoelen.Where(s => s.reservering.programmering.id == id).Select(s => s.value).ToListAsync());
            }
            await Clients.Caller.SendAsync("receiveMessage", unusedChairsContext.Get());
        }

        
    }
    public async Task Update(List<string> selectedSeats,List<string> prevSeats)
    {
        //keep track of the current users and what they choose.
        await unusedChairsContext.Update(selectedSeats);
        await unusedChairsContext.OpenSeat(selectedSeats,prevSeats);
        await Clients.All.SendAsync("UpdateSeats", unusedChairsContext.Get());
    }
}

public class CurrentSeatContext
{
    private static CurrentSeatContext _instance = null;
    private static List<string> currentlyUsedChairs { get; set; }
    public CurrentSeatContext(){}
    public static CurrentSeatContext Instance
    {
        get
        {
            if (_instance == null){
                _instance = new CurrentSeatContext();
                currentlyUsedChairs = new();
            }
            return _instance;
        }
    }
    public async Task Update(List<string> list){
        await Task.Run(() =>
        {
            foreach (var item in currentlyUsedChairs.ToList())
            {
                if (list.Any(i => i == item))
                {
                    currentlyUsedChairs.Remove(item);
                }
            }
            currentlyUsedChairs.AddRange(list);
        });
    }

    public async Task OpenSeat(List<string> current,List<string> prev){
        await Task.Run(() =>
        {
            var openSeats = prev.Except(current);
            foreach(var seat in openSeats){
                System.Console.WriteLine(seat);
                currentlyUsedChairs.Remove(seat); 
            }
        });
    }
    public List<string> Get(){
        return currentlyUsedChairs;
    }
}