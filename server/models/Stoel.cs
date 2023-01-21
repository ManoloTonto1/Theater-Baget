public class Stoel{
    public int id { get; set; }
    public string value { get; set; }
    public int reserveringFK { get; set; }
    public Reservering reservering { get; set; }

}