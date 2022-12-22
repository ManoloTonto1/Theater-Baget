public class LoginGegevens {
    public int id { get; set; }
    public int user_id { get; set; }
    public Gebruiker? user { get; set; }
    public string email { get; set; } = "";
    public string wachtwoord { get; set; } = "";
    public bool twoFactor { get; set; }
    
}