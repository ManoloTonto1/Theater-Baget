public class LoginGegevens {
    public int id { get; set; }
    public string email { get; set; }
    public string wachtwoord { get; set; }
    public bool twoFactor { get; set; }
    public Gebruiker owner { get; set; }
}