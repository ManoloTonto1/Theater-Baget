public class Interesse {
    public int id { get; set; }
    public string omschrijving { get; set; }
    public DateTime datum { get; set; }
    public Gebruiker owner { get; set; }
} 