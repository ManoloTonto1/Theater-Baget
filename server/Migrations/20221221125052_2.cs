using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class _2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Betaling_Reservering_reserveringFK",
                table: "Betaling");

            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-groepen_Gebruiker_betrokkenenid",
                table: "betrokkene-groepen");

            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-programmering_Gebruiker_betrokkenenid",
                table: "betrokkene-programmering");

            migrationBuilder.DropIndex(
                name: "IX_Betaling_reserveringFK",
                table: "Betaling");

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

            migrationBuilder.DropColumn(
                name: "reserveringFK",
                table: "Betaling");

            migrationBuilder.CreateTable(
                name: "Bestelling",
                columns: table => new
                {
                    factuurNr = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    korting = table.Column<int>(type: "INTEGER", nullable: false),
                    reserveringFK = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bestelling", x => x.factuurNr);
                    table.ForeignKey(
                        name: "FK_Bestelling_Betaling_factuurNr",
                        column: x => x.factuurNr,
                        principalTable: "Betaling",
                        principalColumn: "factuurNr",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Bestelling_Reservering_reserveringFK",
                        column: x => x.reserveringFK,
                        principalTable: "Reservering",
                        principalColumn: "id",
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

            migrationBuilder.CreateTable(
                name: "Donatie",
                columns: table => new
                {
                    factuurNr = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    message = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Donatie", x => x.factuurNr);
                    table.ForeignKey(
                        name: "FK_Donatie_Betaling_factuurNr",
                        column: x => x.factuurNr,
                        principalTable: "Betaling",
                        principalColumn: "factuurNr",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bestelling_reserveringFK",
                table: "Bestelling",
                column: "reserveringFK",
                unique: true);

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

            migrationBuilder.DropTable(
                name: "Bestelling");

            migrationBuilder.DropTable(
                name: "Betrokkene");

            migrationBuilder.DropTable(
                name: "Donatie");

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

            migrationBuilder.AddColumn<int>(
                name: "reserveringFK",
                table: "Betaling",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Betaling_reserveringFK",
                table: "Betaling",
                column: "reserveringFK",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Betaling_Reservering_reserveringFK",
                table: "Betaling",
                column: "reserveringFK",
                principalTable: "Reservering",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

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
        }
    }
}
