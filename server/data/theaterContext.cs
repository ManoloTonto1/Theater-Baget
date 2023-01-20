using Microsoft.EntityFrameworkCore;

public class theaterContext : DbContext
{
    public theaterContext(DbContextOptions<theaterContext> options)
    : base(options)
    {
    }

    public DbSet<Gebruiker> Gebruiker { get; set; } = default!;
    public DbSet<Stoel> stoelen { get; set; } = default!;
    public DbSet<Betaling> Betaling { get; set; } = default!;
    public DbSet<Betrokkene> Betrokkene { get; set; } = default!;
    public DbSet<Donatie> Donatie { get; set; } = default!;
    public DbSet<Groep> Groep { get; set; } = default!;
    public DbSet<Interesse> Interesse { get; set; } = default!;
    public DbSet<EncryptionKey> Key { get; set; } = default!;
    public DbSet<LoginGegevens> LoginGegeven { get; set; } = default!;
    public DbSet<Logs> Logs { get; set; } = default!;
    public DbSet<Programmering> Programmering { get; set; } = default!;
    public DbSet<Reservering> Reservering { get; set; } = default!;
    public DbSet<Zaal> Zaal { get; set; } = default!;

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.Entity<Zaal>()
            .ToTable("Zaal");
        builder.Entity<Reservering>()
            .ToTable("Reservering");
        builder.Entity<Reservering>()
        .HasKey(reservering => reservering.id);
        builder.Entity<Betaling>()
            .ToTable("Betalingen");

        // Donaties
        builder.Entity<Donatie>()
            .ToTable("Donatie");
        builder.Entity<Donatie>()
        .HasOne(d => d.user)
        .WithMany(g => g.donaties);
        // Betaling

        builder.Entity<Betaling>()
            .HasKey(betaling => betaling.id);


        // Betrokkene
        builder.Entity<Betrokkene>()
            .ToTable("Betrokkene");

        builder.Entity<Betrokkene>()
            .HasMany(betrokkene => betrokkene.groepen)
            .WithMany(groep => groep.betrokkenen)
            .UsingEntity("betrokkene-groepen");

        builder.Entity<Betrokkene>()
            .HasMany(betrokkene => betrokkene.programmeringen)
            .WithMany(programmering => programmering.betrokkenen)
            .UsingEntity("betrokkene-programmering");

        // Gebruiker
        builder.Entity<Gebruiker>()
            .HasOne(gebruiker => gebruiker.loginGegevens)
            .WithOne(logingegevens => logingegevens.user)
            .HasForeignKey<LoginGegevens>(logingegevens => logingegevens.user_id);

        builder.Entity<Gebruiker>()
            .HasMany(gebruiker => gebruiker.reserveringen)
            .WithOne(reservering => reservering.owner);

        builder.Entity<Gebruiker>()
            .HasMany(gebruiker => gebruiker.interesses)
            .WithOne(it => it.owner);

        builder.Entity<Gebruiker>()
            .HasMany(gebruiker => gebruiker.logs)
            .WithOne(logs => logs.gebruiker);

        // Groep
        builder.Entity<Groep>()
            .HasMany(groep => groep.betrokkenen)
            .WithMany(betrokkene => betrokkene.groepen);

        builder.Entity<Groep>()
            .HasMany(groep => groep.programmeringen)
            .WithMany(programmering => programmering.groepen)
            .UsingEntity("groep-programmering");

        // Programmering
        builder.Entity<Programmering>()
            .HasOne(programmering => programmering.zaal)
            .WithMany(zaal => zaal.programmeringen);

        builder.Entity<Programmering>()
            .HasMany(programmering => programmering.betrokkenen)
            .WithMany(betrokkene => betrokkene.programmeringen);

        builder.Entity<Programmering>()
            .HasMany(programmering => programmering.groepen)
            .WithMany(groep => groep.programmeringen);

        builder.Entity<Programmering>()
            .HasMany(programmering => programmering.reserveringen)
            .WithOne(reservering => reservering.programmering);

        // Reserveering
        builder.Entity<Reservering>()
            .HasOne(reservering => reservering.zaal)
            .WithMany(zaal => zaal.reserveringen);

        builder.Entity<Reservering>()
            .HasOne(reservering => reservering.betaling)
            .WithOne(betaling => betaling.reservering)
            .HasForeignKey<Betaling>(be => be.reserveringFK);

        // Comments
        builder.Entity<Comment>()
            .HasOne(comment => comment.owner)
            .WithMany(gebruiker => gebruiker.comments);

        builder.Entity<Comment>()
            .HasOne(comment => comment.programmering)
            .WithMany(programmering => programmering.comments);
        // Zaal

        builder.Entity<Zaal>()
            .HasKey(zaal => zaal.zaalNr);


        // logs
        builder.Entity<Logs>()
            .HasKey(logs => logs.lognr);


        // Stoelen 
        builder.Entity<Stoel>()
            .HasKey(s => s.id);

        builder.Entity<Stoel>()
            .HasOne(res => res.reservering)
            .WithMany(stoelen => stoelen.stoelen);

    }
}
