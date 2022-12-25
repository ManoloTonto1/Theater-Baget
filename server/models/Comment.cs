public class Comment {
    public int id { get; set; }
    public string content { get; set; } = "";
    public CommentTypes type { get; set; }
    public DateTime datum { get; set; }
    public Gebruiker? owner { get; set; }
    public Programmering? programmering { get; set; }
}