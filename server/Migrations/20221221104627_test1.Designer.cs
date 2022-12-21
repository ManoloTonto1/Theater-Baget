﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace server.Migrations
{
    [DbContext(typeof(theaterContext))]
    [Migration("20221221104627_test1")]
    partial class test1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.1");

            modelBuilder.Entity("Betaling", b =>
                {
                    b.Property<int>("factuurnr")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("ownerid")
                        .HasColumnType("INTEGER");

                    b.Property<int>("prijs")
                        .HasColumnType("INTEGER");

                    b.HasKey("factuurnr");

                    b.HasIndex("ownerid");

                    b.ToTable("Betaling");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Betaling");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("Gebruiker", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("donatieAantal")
                        .HasColumnType("INTEGER");

                    b.Property<int>("leeftijdsGroep")
                        .HasColumnType("INTEGER");

                    b.Property<int>("level")
                        .HasColumnType("INTEGER");

                    b.Property<string>("naam")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("soort")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Gebruiker");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Gebruiker");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("Groep", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("afbeelding")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("link")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("naam")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("omschrijving")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Groep");
                });

            modelBuilder.Entity("Interesse", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("datum")
                        .HasColumnType("TEXT");

                    b.Property<string>("omschrijving")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("ownerid")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.HasIndex("ownerid");

                    b.ToTable("Interesse");
                });

            modelBuilder.Entity("Key", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("key")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Key");
                });

            modelBuilder.Entity("LoginGegevens", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("gebruikerFK")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("twoFactor")
                        .HasColumnType("INTEGER");

                    b.Property<string>("wachtwoord")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.HasIndex("gebruikerFK")
                        .IsUnique();

                    b.ToTable("LoginGegeven");
                });

            modelBuilder.Entity("Logs", b =>
                {
                    b.Property<int>("lognr")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("datum")
                        .HasColumnType("TEXT");

                    b.Property<int>("gebruikerid")
                        .HasColumnType("INTEGER");

                    b.Property<string>("query")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("lognr");

                    b.HasIndex("gebruikerid");

                    b.ToTable("Logs");
                });

            modelBuilder.Entity("Programmering", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("afbeelding")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("datum")
                        .HasColumnType("TEXT");

                    b.Property<string>("omschrijving")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("titel")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("zaalnr")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.HasIndex("zaalnr");

                    b.ToTable("Programmering");
                });

            modelBuilder.Entity("Reservering", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("QR")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("aankoopDatum")
                        .HasColumnType("TEXT");

                    b.Property<int>("bestellingFK")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("betaald")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ownerid")
                        .HasColumnType("INTEGER");

                    b.Property<int>("programmeringid")
                        .HasColumnType("INTEGER");

                    b.Property<string>("stoelen")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("zaalnr")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.HasIndex("bestellingFK")
                        .IsUnique();

                    b.HasIndex("ownerid");

                    b.HasIndex("programmeringid");

                    b.HasIndex("zaalnr");

                    b.ToTable("Reservering");
                });

            modelBuilder.Entity("Zaal", b =>
                {
                    b.Property<int>("zaalnr")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("derderangsAantal")
                        .HasColumnType("INTEGER");

                    b.Property<int>("eersterangsAantal")
                        .HasColumnType("INTEGER");

                    b.Property<string>("soort")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("tweederangsAantal")
                        .HasColumnType("INTEGER");

                    b.HasKey("zaalnr");

                    b.ToTable("Zaal");
                });

            modelBuilder.Entity("betrokkene-groepen", b =>
                {
                    b.Property<int>("betrokkenenid")
                        .HasColumnType("INTEGER");

                    b.Property<int>("groepenid")
                        .HasColumnType("INTEGER");

                    b.HasKey("betrokkenenid", "groepenid");

                    b.HasIndex("groepenid");

                    b.ToTable("betrokkene-groepen");
                });

            modelBuilder.Entity("betrokkene-programmering", b =>
                {
                    b.Property<int>("betrokkenenid")
                        .HasColumnType("INTEGER");

                    b.Property<int>("programmeringenid")
                        .HasColumnType("INTEGER");

                    b.HasKey("betrokkenenid", "programmeringenid");

                    b.HasIndex("programmeringenid");

                    b.ToTable("betrokkene-programmering");
                });

            modelBuilder.Entity("groep-programmering", b =>
                {
                    b.Property<int>("groepenid")
                        .HasColumnType("INTEGER");

                    b.Property<int>("programmeringenid")
                        .HasColumnType("INTEGER");

                    b.HasKey("groepenid", "programmeringenid");

                    b.HasIndex("programmeringenid");

                    b.ToTable("groep-programmering");
                });

            modelBuilder.Entity("Donatie", b =>
                {
                    b.HasBaseType("Betaling");

                    b.Property<string>("message")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasDiscriminator().HasValue("Donatie");
                });

            modelBuilder.Entity("bestelling", b =>
                {
                    b.HasBaseType("Betaling");

                    b.Property<int>("korting")
                        .HasColumnType("INTEGER");

                    b.HasDiscriminator().HasValue("bestelling");
                });

            modelBuilder.Entity("Betrokkene", b =>
                {
                    b.HasBaseType("Gebruiker");

                    b.Property<string>("afbeelding")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("omschrijving")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("type")
                        .HasColumnType("INTEGER");

                    b.HasDiscriminator().HasValue("Betrokkene");
                });

            modelBuilder.Entity("Betaling", b =>
                {
                    b.HasOne("Gebruiker", "owner")
                        .WithMany("betalingen")
                        .HasForeignKey("ownerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("owner");
                });

            modelBuilder.Entity("Interesse", b =>
                {
                    b.HasOne("Gebruiker", "owner")
                        .WithMany("interesses")
                        .HasForeignKey("ownerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("owner");
                });

            modelBuilder.Entity("LoginGegevens", b =>
                {
                    b.HasOne("Gebruiker", "owner")
                        .WithOne("loginGegevens")
                        .HasForeignKey("LoginGegevens", "gebruikerFK")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("owner");
                });

            modelBuilder.Entity("Logs", b =>
                {
                    b.HasOne("Gebruiker", "gebruiker")
                        .WithMany("logs")
                        .HasForeignKey("gebruikerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("gebruiker");
                });

            modelBuilder.Entity("Programmering", b =>
                {
                    b.HasOne("Zaal", "zaal")
                        .WithMany("programmeringen")
                        .HasForeignKey("zaalnr")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("zaal");
                });

            modelBuilder.Entity("Reservering", b =>
                {
                    b.HasOne("bestelling", "bestelling")
                        .WithOne("reservering")
                        .HasForeignKey("Reservering", "bestellingFK")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Gebruiker", "owner")
                        .WithMany("reserveringen")
                        .HasForeignKey("ownerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Programmering", "programmering")
                        .WithMany("reserveringen")
                        .HasForeignKey("programmeringid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Zaal", "zaal")
                        .WithMany("reserveringen")
                        .HasForeignKey("zaalnr")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("bestelling");

                    b.Navigation("owner");

                    b.Navigation("programmering");

                    b.Navigation("zaal");
                });

            modelBuilder.Entity("betrokkene-groepen", b =>
                {
                    b.HasOne("Betrokkene", null)
                        .WithMany()
                        .HasForeignKey("betrokkenenid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Groep", null)
                        .WithMany()
                        .HasForeignKey("groepenid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("betrokkene-programmering", b =>
                {
                    b.HasOne("Betrokkene", null)
                        .WithMany()
                        .HasForeignKey("betrokkenenid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Programmering", null)
                        .WithMany()
                        .HasForeignKey("programmeringenid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("groep-programmering", b =>
                {
                    b.HasOne("Groep", null)
                        .WithMany()
                        .HasForeignKey("groepenid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Programmering", null)
                        .WithMany()
                        .HasForeignKey("programmeringenid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Gebruiker", b =>
                {
                    b.Navigation("betalingen");

                    b.Navigation("interesses");

                    b.Navigation("loginGegevens")
                        .IsRequired();

                    b.Navigation("logs");

                    b.Navigation("reserveringen");
                });

            modelBuilder.Entity("Programmering", b =>
                {
                    b.Navigation("reserveringen");
                });

            modelBuilder.Entity("Zaal", b =>
                {
                    b.Navigation("programmeringen");

                    b.Navigation("reserveringen");
                });

            modelBuilder.Entity("bestelling", b =>
                {
                    b.Navigation("reservering")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
