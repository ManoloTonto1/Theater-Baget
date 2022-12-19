using Microsoft.EntityFrameworkCore;

public class theaterContext : DbContext
{
    public theaterContext(DbContextOptions<theaterContext> options)
        : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Gebruiker>()
            

        builder.Entity<Attractie>()
            

    }

    //public DbSet<Attractie> Attractie { get; set; } = default!;
    //public DbSet<Gebruiker> Gebruiker { get; set; } = default!;
}
