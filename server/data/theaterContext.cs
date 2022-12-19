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

        builder.Entity<bestelling>()
            .HasOne(bs => bs.reservering)
            .WithOne(re => re.bestelling);

        builder.Entity<Betaling>()
            .HasOne(ba => ba.owner)
            .WithMany(gb => gb.betalingen);

        
    }

    public DbSet<bestelling> Bestelling { get; set; } = default!;
    public DbSet<Betaling> Betaling { get; set; } = default!;
    public DbSet<Betrokkene> Betrokkene { get; set; } = default!;
    public DbSet<Donatie> Donaties { get; set; } = default!;
    public DbSet<Gebruiker> Gebruiker { get; set; } = default!;
    public DbSet<Groep> Groep { get; set; } = default!;
    public DbSet<Interesse> Interesse { get; set; } = default!;
    public DbSet<Key> Key { get; set; } = default!;
    public DbSet<LoginGegevens> LoginGegeven { get; set; } = default!;
    public DbSet<Logs> Logs { get; set; } = default!;
    public DbSet<Programmering> Programmering { get; set; } = default!;
    public DbSet<Reservering> Reservering { get; set; } = default!;
    public DbSet<Zaal> Zaal { get; set; } = default!;
}
