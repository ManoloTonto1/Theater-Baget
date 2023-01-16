public class Groep {
    public int id { get; set; }
    public string naam { get; set; } = "";
    public string omschrijving { get; set; } = "";
    public string afbeelding { get; set; } = "";
    public string websiteUrl { get; set; } = "";
    public List<Betrokkene>? betrokkenen { get; set; }
    public List<Programmering>? programmeringen { get; set; }
}

public class GroepData {
    public string naam { get; set; } = "";
    public string omschrijving { get; set; } = "";
    public string afbeelding { get; set; } = "";
    public string websiteUrl { get; set; } = "";
}