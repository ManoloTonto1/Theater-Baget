using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class test2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-groepen_Gebruiker_betrokkenenid",
                table: "betrokkene-groepen");

            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-programmering_Gebruiker_betrokkenenid",
                table: "betrokkene-programmering");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservering_Betaling_bestellingFK",
                table: "Reservering");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Gebruiker");

            migrationBuilder.DropColumn(
                name: "afbeelding",
                table: "Gebruiker");

            migrationBuilder.DropColumn(
                name: "omschrijving",
                table: "Gebruiker");

            migrationBuilder.DropColumn(
                name: "type",
                table: "Gebruiker");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Betaling");

            migrationBuilder.DropColumn(
                name: "korting",
                table: "Betaling");

            migrationBuilder.DropColumn(
                name: "message",
                table: "Betaling");

            migrationBuilder.CreateTable(
                name: "bestelling",
                columns: table => new
                {
                    factuurnr = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    message = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bestelling", x => x.factuurnr);
                    table.ForeignKey(
                        name: "FK_bestelling_Betaling_factuurnr",
                        column: x => x.factuurnr,
                        principalTable: "Betaling",
                        principalColumn: "factuurnr",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Bestelling",
                columns: table => new
                {
                    factuurnr = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    korting = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bestelling", x => x.factuurnr);
                    table.ForeignKey(
                        name: "FK_Bestelling_Betaling_factuurnr",
                        column: x => x.factuurnr,
                        principalTable: "Betaling",
                        principalColumn: "factuurnr",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Betrokkene",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    type = table.Column<int>(type: "INTEGER", nullable: false),
                    omschrijving = table.Column<string>(type: "TEXT", nullable: false),
                    afbeelding = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Betrokkene", x => x.id);
                    table.ForeignKey(
                        name: "FK_Betrokkene_Gebruiker_id",
                        column: x => x.id,
                        principalTable: "Gebruiker",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_betrokkene-groepen_Betrokkene_betrokkenenid",
                table: "betrokkene-groepen",
                column: "betrokkenenid",
                principalTable: "Betrokkene",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_betrokkene-programmering_Betrokkene_betrokkenenid",
                table: "betrokkene-programmering",
                column: "betrokkenenid",
                principalTable: "Betrokkene",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservering_Bestelling_bestellingFK",
                table: "Reservering",
                column: "bestellingFK",
                principalTable: "Bestelling",
                principalColumn: "factuurnr",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-groepen_Betrokkene_betrokkenenid",
                table: "betrokkene-groepen");

            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-programmering_Betrokkene_betrokkenenid",
                table: "betrokkene-programmering");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservering_Bestelling_bestellingFK",
                table: "Reservering");

            migrationBuilder.DropTable(
                name: "bestelling");

            migrationBuilder.DropTable(
                name: "Bestelling");

            migrationBuilder.DropTable(
                name: "Betrokkene");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Gebruiker",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "afbeelding",
                table: "Gebruiker",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "omschrijving",
                table: "Gebruiker",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "type",
                table: "Gebruiker",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Betaling",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "korting",
                table: "Betaling",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "message",
                table: "Betaling",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_betrokkene-groepen_Gebruiker_betrokkenenid",
                table: "betrokkene-groepen",
                column: "betrokkenenid",
                principalTable: "Gebruiker",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_betrokkene-programmering_Gebruiker_betrokkenenid",
                table: "betrokkene-programmering",
                column: "betrokkenenid",
                principalTable: "Gebruiker",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservering_Betaling_bestellingFK",
                table: "Reservering",
                column: "bestellingFK",
                principalTable: "Betaling",
                principalColumn: "factuurnr",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
