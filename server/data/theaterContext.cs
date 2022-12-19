using Microsoft.EntityFrameworkCore;

public class theaterContext : DbContext
{
    public theaterContext(DbContextOptions<theaterContext> options)
        : base(options)
    {
    }

    //public DbSet<Attractie> Attractie { get; set; } = default!;
    //public DbSet<Gebruiker> Gebruiker { get; set; } = default!;
}
