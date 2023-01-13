using Microsoft.OpenApi.Any;

public class Programmering {
    public int id { get; set; }
    public string titel { get; set; } = "";
    public string omschrijving { get; set; } = "";
    public DateTime datum { get; set; }
    public string afbeelding { get; set; }
    public Zaal? zaal { get; set; }
    public List<Betrokkene>? betrokkenen { get; set; }
    public List<Groep>? groepen { get; set; }
    public List<Reservering>? reserveringen { get; set; }
    public List<Comment>? comments { get; set; }
}


public class Data<Programmering>
{
    public int id { get; set; }
    public string titel { get; set; } = "";
    public string omschrijving { get; set; } = "";
    public string datum { get; set; } = "";
    public string afbeelding { get; set; }

}