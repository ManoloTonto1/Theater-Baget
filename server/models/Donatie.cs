using Org.BouncyCastle.Bcpg;

public class Donatie : Betaling {
    public string message { get; set; } = "";
}
public class DonatieData {
    public string message { get; set; } = "";
    public string factuurNr { get; set; }
    public float prijs { get; set; }
    public string userId { get; set; }

}