public class SignInData {
    public string email { get; set; }
    public string password { get; set; }
    public bool persistentLogin { get; set; }
}
public class loggedInUserData{
    public string token { get; set; }
    public Gebruiker gebruiker { get; set; }
}