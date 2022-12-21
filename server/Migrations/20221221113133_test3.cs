using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class test3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-groepen_Betrokkene_betrokkenenid",
                table: "betrokkene-groepen");

            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-programmering_Betrokkene_betrokkenenid",
                table: "betrokkene-programmering");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-groepen_Gebruiker_betrokkenenid",
                table: "betrokkene-groepen");

            migrationBuilder.DropForeignKey(
                name: "FK_betrokkene-programmering_Gebruiker_betrokkenenid",
                table: "betrokkene-programmering");

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

            migrationBuilder.CreateTable(
                name: "Betrokkene",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    afbeelding = table.Column<string>(type: "TEXT", nullable: false),
                    omschrijving = table.Column<string>(type: "TEXT", nullable: false),
                    type = table.Column<int>(type: "INTEGER", nullable: false)
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
        }
    }
}
