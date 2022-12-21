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

        builder.Entity<Bestelling>()
            .ToTable("Bestelling");

        builder.Entity<Donatie>()
            .ToTable("bestelling");

        builder.Entity<Bestelling>()
            .HasOne(bs => bs.reservering)
            .WithOne(re => re.bestelling)
            .HasForeignKey<Reservering>(re => re.bestellingFK);

        builder.Entity<Betaling>()
            .HasKey(bt => bt.factuurnr);

        builder.Entity<Betaling>()
            .HasOne(ba => ba.owner)
            .WithMany(gb => gb.betalingen);

        builder.Entity<Betrokkene>()
            .ToTable("Betrokkene");

        builder.Entity<Betrokkene>()
            .HasMany(bt => bt.groepen)
            .WithMany(gr => gr.betrokkenen)
            .UsingEntity("betrokkene-groepen");

        builder.Entity<Betrokkene>()
            .HasMany(bt => bt.programmeringen)
            .WithMany(pr => pr.betrokkenen)
            .UsingEntity("betrokkene-programmering");

        builder.Entity<Gebruiker>()
            .HasOne(gb => gb.loginGegevens)
            .WithOne(lg => lg.owner)
            .HasForeignKey<LoginGegevens>(lg => lg.gebruikerFK);

        builder.Entity<Gebruiker>()
            .HasMany(gb => gb.reserveringen)
            .WithOne(re => re.owner);

        builder.Entity<Gebruiker>()
            .HasMany(gb => gb.interesses)
            .WithOne(it => it.owner);

        builder.Entity<Gebruiker>()
            .HasMany(gb => gb.logs)
            .WithOne(lo => lo.gebruiker);

        builder.Entity<Groep>()
            .HasMany(gr => gr.betrokkenen)
            .WithMany(bt => bt.groepen);

        builder.Entity<Groep>()
            .HasMany(gr => gr.programmeringen)
            .WithMany(pr => pr.groepen)
            .UsingEntity("groep-programmering");

        builder.Entity<Programmering>()
            .HasOne(pr => pr.zaal)
            .WithMany(za => za.programmeringen);

        builder.Entity<Programmering>()
            .HasMany(pr => pr.betrokkenen)
            .WithMany(bt => bt.programmeringen);

        builder.Entity<Programmering>()
            .HasMany(pr => pr.groepen)
            .WithMany(gr => gr.programmeringen);

        builder.Entity<Programmering>()
            .HasMany(pr => pr.reserveringen)
            .WithOne(re => re.programmering);

        builder.Entity<Reservering>()
            .HasOne(re => re.zaal)
            .WithMany(za => za.reserveringen);

        builder.Entity<Zaal>()
            .HasKey(za => za.zaalnr);

        builder.Entity<Logs>()
            .HasKey(lo => lo.lognr);
    }

    public DbSet<Bestelling> Bestelling { get; set; } = default!;
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
