public class Betaling {

    public int id { get; set; }
    public int? korting { get; set; }
    public DateTime aankoopDatum { get; set; }
    public string factuurNr { get; set; }
    public float prijs { get; set; }
    public int? reserveringFK { get; set; }
    public Reservering? reservering { get; set; }
}