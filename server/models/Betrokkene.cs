public class Betrokkene : Gebruiker {
    public Type type { get; set; }
    public string omschrijving { get; set; } = "";
    public string afbeelding { get; set; } = "";
    public List<Groep>? groepen { get; set; }  = null;
    public List<Programmering>? programmeringen { get; set; }  = null;
}