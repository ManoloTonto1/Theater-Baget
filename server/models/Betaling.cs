public class Betaling {
    public int id { get; set; }
    public string factuurNr{ get; set; }
    public float prijs { get; set; }
    public Gebruiker? owner { get; set; } = null;
}