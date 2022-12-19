public class Gebruiker {
    public int id { get; set; }
    public string naam { get; set; }
    public LeeftijdsGroep leeftijdsGroep { get; set; }
    public int donatieAantal { get; set; }
    public string soort { get; set; }
    public int level { get; set; }
    public LoginGegevens loginGegevens { get; set; }
    public List<Reservering> reserveringen { get; set; } 
    public List<Interesse> interesses { get; set; }
    public List<Betaling> betalingen { get; set; }
    public List<Logs> logs { get; set; }
}