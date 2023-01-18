using Microsoft.OpenApi.Any;

public class Programmering {
    public int id { get; set; }
    public string titel { get; set; } = "";
    public string omschrijving { get; set; } = "";
    public float prijs { get; set; } = 10f;
    public DateTime datum { get; set; }
    public string afbeelding { get; set; }
    public Zaal? zaal { get; set; }
    public List<Betrokkene>? betrokkenen { get; set; }
    public List<Groep>? groepen { get; set; }
    public List<Reservering>? reserveringen { get; set; }
    public List<Comment>? comments { get; set; }
}


public class ProgrammeringData
{
    public int id { get; set; }
    public string titel { get; set; } 
    public string omschrijving { get; set; } 
    public string datum { get; set; } 
    public string afbeelding { get; set; }
    public float prijs { get; set; } = 10f;
}