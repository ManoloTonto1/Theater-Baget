public class Programmering {
    public int id { get; set; }
    public string titel { get; set; }
    public string omschrijving { get; set; }
    public DateTime datum { get; set; }
    public string afbeelding { get; set; }
    public Zalen zaal { get; set; }
    public List<Betrokkenen> betrokkenen { get; set; }
    public List<Reservering> reserveringen { get; set; }

}