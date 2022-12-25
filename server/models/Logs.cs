public class Logs {
    public int lognr { get; set; }
    public string query { get; set; } = "";
    public DateTime datum { get; set; }
    public Gebruiker? gebruiker { get; set; }
}