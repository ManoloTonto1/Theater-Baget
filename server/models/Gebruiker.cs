public class Gebruiker {
    public int id { get; set; }
    public string naam { get; set; } = "";
    public LeeftijdsGroep leeftijdsGroep { get; set; }
    public int level { get; set; } // Role: user, medewerker, admin ect
    public LoginGegevens? loginGegevens { get; set; }
    public List<Reservering>? reserveringen { get; set; } 
    public List<Interesse>? interesses { get; set; }
    public List<Betaling>? betalingen { get; set; }
    public List<Logs>? logs { get; set; }
    public List<Comment>? comments { get; set; }
}