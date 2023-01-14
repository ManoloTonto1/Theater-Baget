public class Reservering {
    public int id { get; set; }
    public string QR { get; set; } = "";
    public bool betaald { get; set; }
    public DateTime aankoopDatum { get; set; }
    public string stoelen { get; set; } = "";
    public Gebruiker? owner { get; set; }
    public Zaal? zaal { get; set; }
    public Programmering? programmering { get; set; }
     public Bestelling? bestelling { get; set; }
}