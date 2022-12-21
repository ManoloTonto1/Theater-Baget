using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class test4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LoginGegeven_Gebruiker_gebruikerFK",
                table: "LoginGegeven");

            migrationBuilder.DropTable(
                name: "Key");

            migrationBuilder.DropPrimaryKey(
                name: "PK_LoginGegeven",
                table: "LoginGegeven");

            migrationBuilder.RenameTable(
                name: "LoginGegeven",
                newName: "LoginGegevens");

            migrationBuilder.RenameIndex(
                name: "IX_LoginGegeven_gebruikerFK",
                table: "LoginGegevens",
                newName: "IX_LoginGegevens_gebruikerFK");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LoginGegevens",
                table: "LoginGegevens",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_LoginGegevens_Gebruiker_gebruikerFK",
                table: "LoginGegevens",
                column: "gebruikerFK",
                principalTable: "Gebruiker",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LoginGegevens_Gebruiker_gebruikerFK",
                table: "LoginGegevens");

            migrationBuilder.DropPrimaryKey(
                name: "PK_LoginGegevens",
                table: "LoginGegevens");

            migrationBuilder.RenameTable(
                name: "LoginGegevens",
                newName: "LoginGegeven");

            migrationBuilder.RenameIndex(
                name: "IX_LoginGegevens_gebruikerFK",
                table: "LoginGegeven",
                newName: "IX_LoginGegeven_gebruikerFK");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LoginGegeven",
                table: "LoginGegeven",
                column: "id");

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

            migrationBuilder.AddForeignKey(
                name: "FK_LoginGegeven_Gebruiker_gebruikerFK",
                table: "LoginGegeven",
                column: "gebruikerFK",
                principalTable: "Gebruiker",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
