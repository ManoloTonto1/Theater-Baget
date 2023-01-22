using System.Net.WebSockets;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers;

public class StoelenController : Hub
{
    private CurrentSeatContext seatContext = CurrentSeatContext.Instance;
    private IServiceProvider _sp;
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
            var ctx = await seatContext.Get(id);
            if(ctx.Count == 0){
                var dbList = await context.stoelen.Where(s => s.reservering.programmering.id == id).Select(s => s.value).ToListAsync();
                await seatContext.Update(id, dbList);
            }
            await Clients.Caller.SendAsync("receiveMessage", await seatContext.Get(id));
        }

        
    }
    public async Task Update(int id, List<string> selectedSeats,List<string> prevSeats)
    {
        //keep track of the current users and what they choose.
        await seatContext.Update(id,selectedSeats);
        await seatContext.OpenSeat(id,selectedSeats,prevSeats);
        await Clients.Group(id.ToString()).SendAsync("UpdateSeats", await seatContext.Get(id));
    }
    public async Task UnsubscribeNoBuy(int id,List<string> selectedSeats,List<string> prevSeats)
    {
        await Update(id, selectedSeats, prevSeats);
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, id.ToString());
    }
    public async Task Unsubscribe(int id)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, id.ToString());
    }
}

public class CurrentSeatContext
{
    private static CurrentSeatContext _instance = null;
    private static List<Tuple<int,List<string>>?> currentlyUsedChairs { get; set; }
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
    public async Task Update(int id, List<string> list){
        await Task.Run(() =>
        {
            var currentGroup = currentlyUsedChairs.Where(i => i.Item1 == id).First();
            if (currentGroup == null){
                return;
            }
            var scopedSeats = currentGroup.Item2.ToList();
            foreach (var item in scopedSeats.ToList())
            {
                if (list.Any(i => i == item))
                {
                    scopedSeats.Remove(item);
                }
            }
            scopedSeats.AddRange(list);
            currentlyUsedChairs.First(i => i.Item1 == id).Item2.Clear();
            currentlyUsedChairs.First(i => i.Item1 == id).Item2.AddRange(scopedSeats);
        });
    }

    public async Task OpenSeat(int id, List<string> current,List<string> prev){
        await Task.Run(() =>
        {
            var currentGroup = currentlyUsedChairs.Where(i => i.Item1 == id).First();
            if (currentGroup == null){
                return;
            }
            var scopedSeats = currentGroup.Item2.ToList();
            var openSeats = prev.Except(current).ToList();
            foreach(var seat in openSeats){
                scopedSeats.Remove(seat);
            }
            currentlyUsedChairs.First(i => i.Item1 == id).Item2.Clear();
            currentlyUsedChairs.First(i => i.Item1 == id).Item2.AddRange(scopedSeats);
        });
    }
    public async Task<List<string>> Get(int id){
        return await Task.Run(() =>
        {
            List<string>? seatCtx;

            try
            {
                var c = currentlyUsedChairs.Where(i => i.Item1 == id).First();
                seatCtx = c.Item2.ToList();
            }
            catch (System.Exception)
            {
                seatCtx = null;
            }

            if(currentlyUsedChairs.Count == 0){
                var newList = new Tuple<int,List<string>>(id, new List<string>());
                currentlyUsedChairs.Add(newList);
                return newList.Item2.ToList();
            }

            if (seatCtx == null)
            {
                var newList = new Tuple<int,List<string>>(id, new List<string>());
                currentlyUsedChairs.Add(newList);
                return newList.Item2.ToList();
            }
            return seatCtx;
        });

    }
}