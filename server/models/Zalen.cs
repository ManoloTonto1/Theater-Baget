public class Zalen {
    public int zaalnr { get; set; }
    public string soort { get; set; }
    public int eersterangsAantal { get; set; }
    public int tweederangsAantal { get; set; }
    public int derderangsAantal { get; set; }
    public List<Programmering> programmeringen { get; set; }
    public List<Reservering> reserveringen { get; set; }
} 