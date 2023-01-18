public class Reservering {
    public int id { get; set; }
    public string QR { get; set; } = "";
    public DateTime aankoopDatum { get; set; }
    public IEnumerable<string> stoelen { get; set; }
    public Gebruiker? owner { get; set; }
    public Zaal? zaal { get; set; }
    public Programmering? programmering { get; set; }
    public Bestelling? bestelling { get; set; }
}

public class ReserveringData {
    public int? userId { get; set; }
    public int programmeringId { get; set; }
    public IEnumerable<string> stoelen { get; set; }
    public string referenceCode { get; set; }
    public float amountPaid { get; set; }

}