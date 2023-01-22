public class Donatie
{
    public int id { get; set; }
    public string message { get; set; } = "";
    public int userFK { get; set; }
    public Gebruiker user { get; set; }
    public Betaling betaling { get; set; }
}
public class DonatieData
{
    public string message { get; set; } = "";
    public string factuurNr { get; set; }
    public float prijs { get; set; }
    public string? userId { get; set; }
}