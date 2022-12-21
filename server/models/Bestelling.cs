public class Bestelling : Betaling{
    public int korting { get; set; }
    public Reservering reservering { get; set; }
    public int reserveringFK { get; set; }
}