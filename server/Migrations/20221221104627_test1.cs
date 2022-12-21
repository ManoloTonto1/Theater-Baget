using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class test1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Gebruiker",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    naam = table.Column<string>(type: "TEXT", nullable: false),
                    leeftijdsGroep = table.Column<int>(type: "INTEGER", nullable: false),
                    donatieAantal = table.Column<int>(type: "INTEGER", nullable: false),
                    soort = table.Column<string>(type: "TEXT", nullable: false),
                    level = table.Column<int>(type: "INTEGER", nullable: false),
                    Discriminator = table.Column<string>(type: "TEXT", nullable: false),
                    type = table.Column<int>(type: "INTEGER", nullable: true),
                    omschrijving = table.Column<string>(type: "TEXT", nullable: true),
                    afbeelding = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gebruiker", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Groep",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    naam = table.Column<string>(type: "TEXT", nullable: false),
                    omschrijving = table.Column<string>(type: "TEXT", nullable: false),
                    afbeelding = table.Column<string>(type: "TEXT", nullable: false),
                    link = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groep", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Key",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    key = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Key", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Zaal",
                columns: table => new
                {
                    zaalnr = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    soort = table.Column<string>(type: "TEXT", nullable: false),
                    eersterangsAantal = table.Column<int>(type: "INTEGER", nullable: false),
                    tweederangsAantal = table.Column<int>(type: "INTEGER", nullable: false),
                    derderangsAantal = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zaal", x => x.zaalnr);
                });

            migrationBuilder.CreateTable(
                name: "Betaling",
                columns: table => new
                {
                    factuurnr = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    prijs = table.Column<int>(type: "INTEGER", nullable: false),
                    ownerid = table.Column<int>(type: "INTEGER", nullable: false),
                    Discriminator = table.Column<string>(type: "TEXT", nullable: false),
                    message = table.Column<string>(type: "TEXT", nullable: true),
                    korting = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Betaling", x => x.factuurnr);
                    table.ForeignKey(
                        name: "FK_Betaling_Gebruiker_ownerid",
                        column: x => x.ownerid,
                        principalTable: "Gebruiker",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Interesse",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    omschrijving = table.Column<string>(type: "TEXT", nullable: false),
                    datum = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ownerid = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Interesse", x => x.id);
                    table.ForeignKey(
                        name: "FK_Interesse_Gebruiker_ownerid",
                        column: x => x.ownerid,
                        principalTable: "Gebruiker",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LoginGegeven",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    gebruikerFK = table.Column<int>(type: "INTEGER", nullable: false),
                    email = table.Column<string>(type: "TEXT", nullable: false),
                    wachtwoord = table.Column<string>(type: "TEXT", nullable: false),
                    twoFactor = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoginGegeven", x => x.id);
                    table.ForeignKey(
                        name: "FK_LoginGegeven_Gebruiker_gebruikerFK",
                        column: x => x.gebruikerFK,
                        principalTable: "Gebruiker",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Logs",
                columns: table => new
                {
                    lognr = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    query = table.Column<string>(type: "TEXT", nullable: false),
                    datum = table.Column<DateTime>(type: "TEXT", nullable: false),
                    gebruikerid = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logs", x => x.lognr);
                    table.ForeignKey(
                        name: "FK_Logs_Gebruiker_gebruikerid",
                        column: x => x.gebruikerid,
                        principalTable: "Gebruiker",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "betrokkene-groepen",
                columns: table => new
                {
                    betrokkenenid = table.Column<int>(type: "INTEGER", nullable: false),
                    groepenid = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_betrokkene-groepen", x => new { x.betrokkenenid, x.groepenid });
                    table.ForeignKey(
                        name: "FK_betrokkene-groepen_Gebruiker_betrokkenenid",
                        column: x => x.betrokkenenid,
                        principalTable: "Gebruiker",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_betrokkene-groepen_Groep_groepenid",
                        column: x => x.groepenid,
                        principalTable: "Groep",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Programmering",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    titel = table.Column<string>(type: "TEXT", nullable: false),
                    omschrijving = table.Column<string>(type: "TEXT", nullable: false),
                    datum = table.Column<DateTime>(type: "TEXT", nullable: false),
                    afbeelding = table.Column<string>(type: "TEXT", nullable: false),
                    zaalnr = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Programmering", x => x.id);
                    table.ForeignKey(
                        name: "FK_Programmering_Zaal_zaalnr",
                        column: x => x.zaalnr,
                        principalTable: "Zaal",
                        principalColumn: "zaalnr",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "betrokkene-programmering",
                columns: table => new
                {
                    betrokkenenid = table.Column<int>(type: "INTEGER", nullable: false),
                    programmeringenid = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_betrokkene-programmering", x => new { x.betrokkenenid, x.programmeringenid });
                    table.ForeignKey(
                        name: "FK_betrokkene-programmering_Gebruiker_betrokkenenid",
                        column: x => x.betrokkenenid,
                        principalTable: "Gebruiker",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_betrokkene-programmering_Programmering_programmeringenid",
                        column: x => x.programmeringenid,
                        principalTable: "Programmering",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "groep-programmering",
                columns: table => new
                {
                    groepenid = table.Column<int>(type: "INTEGER", nullable: false),
                    programmeringenid = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_groep-programmering", x => new { x.groepenid, x.programmeringenid });
                    table.ForeignKey(
                        name: "FK_groep-programmering_Groep_groepenid",
                        column: x => x.groepenid,
                        principalTable: "Groep",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_groep-programmering_Programmering_programmeringenid",
                        column: x => x.programmeringenid,
                        principalTable: "Programmering",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reservering",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    bestellingFK = table.Column<int>(type: "INTEGER", nullable: false),
                    QR = table.Column<string>(type: "TEXT", nullable: false),
                    betaald = table.Column<bool>(type: "INTEGER", nullable: false),
                    aankoopDatum = table.Column<DateTime>(type: "TEXT", nullable: false),
                    stoelen = table.Column<string>(type: "TEXT", nullable: false),
                    ownerid = table.Column<int>(type: "INTEGER", nullable: false),
                    zaalnr = table.Column<int>(type: "INTEGER", nullable: false),
                    programmeringid = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservering", x => x.id);
                    table.ForeignKey(
                        name: "FK_Reservering_Betaling_bestellingFK",
                        column: x => x.bestellingFK,
                        principalTable: "Betaling",
                        principalColumn: "factuurnr",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reservering_Gebruiker_ownerid",
                        column: x => x.ownerid,
                        principalTable: "Gebruiker",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reservering_Programmering_programmeringid",
                        column: x => x.programmeringid,
                        principalTable: "Programmering",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reservering_Zaal_zaalnr",
                        column: x => x.zaalnr,
                        principalTable: "Zaal",
                        principalColumn: "zaalnr",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Betaling_ownerid",
                table: "Betaling",
                column: "ownerid");

            migrationBuilder.CreateIndex(
                name: "IX_betrokkene-groepen_groepenid",
                table: "betrokkene-groepen",
                column: "groepenid");

            migrationBuilder.CreateIndex(
                name: "IX_betrokkene-programmering_programmeringenid",
                table: "betrokkene-programmering",
                column: "programmeringenid");

            migrationBuilder.CreateIndex(
                name: "IX_groep-programmering_programmeringenid",
                table: "groep-programmering",
                column: "programmeringenid");

            migrationBuilder.CreateIndex(
                name: "IX_Interesse_ownerid",
                table: "Interesse",
                column: "ownerid");

            migrationBuilder.CreateIndex(
                name: "IX_LoginGegeven_gebruikerFK",
                table: "LoginGegeven",
                column: "gebruikerFK",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Logs_gebruikerid",
                table: "Logs",
                column: "gebruikerid");

            migrationBuilder.CreateIndex(
                name: "IX_Programmering_zaalnr",
                table: "Programmering",
                column: "zaalnr");

            migrationBuilder.CreateIndex(
                name: "IX_Reservering_bestellingFK",
                table: "Reservering",
                column: "bestellingFK",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reservering_ownerid",
                table: "Reservering",
                column: "ownerid");

            migrationBuilder.CreateIndex(
                name: "IX_Reservering_programmeringid",
                table: "Reservering",
                column: "programmeringid");

            migrationBuilder.CreateIndex(
                name: "IX_Reservering_zaalnr",
                table: "Reservering",
                column: "zaalnr");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "betrokkene-groepen");

            migrationBuilder.DropTable(
                name: "betrokkene-programmering");

            migrationBuilder.DropTable(
                name: "groep-programmering");

            migrationBuilder.DropTable(
                name: "Interesse");

            migrationBuilder.DropTable(
                name: "Key");

            migrationBuilder.DropTable(
                name: "LoginGegeven");

            migrationBuilder.DropTable(
                name: "Logs");

            migrationBuilder.DropTable(
                name: "Reservering");

            migrationBuilder.DropTable(
                name: "Groep");

            migrationBuilder.DropTable(
                name: "Betaling");

            migrationBuilder.DropTable(
                name: "Programmering");

            migrationBuilder.DropTable(
                name: "Gebruiker");

            migrationBuilder.DropTable(
                name: "Zaal");
        }
    }
}
