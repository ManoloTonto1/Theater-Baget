using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class done : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Betaling_Gebruiker_ownerid",
                table: "Betaling");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Gebruiker_ownerid",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Programmering_programmeringid",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Interesse_Gebruiker_ownerid",
                table: "Interesse");

            migrationBuilder.DropForeignKey(
                name: "FK_Logs_Gebruiker_gebruikerid",
                table: "Logs");

            migrationBuilder.DropForeignKey(
                name: "FK_Programmering_Zaal_zaalNr",
                table: "Programmering");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservering_Gebruiker_ownerid",
                table: "Reservering");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservering_Programmering_programmeringid",
                table: "Reservering");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservering_Zaal_zaalNr",
                table: "Reservering");

            migrationBuilder.AlterColumn<int>(
                name: "zaalNr",
                table: "Reservering",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "programmeringid",
                table: "Reservering",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "ownerid",
                table: "Reservering",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "zaalNr",
                table: "Programmering",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "gebruikerid",
                table: "Logs",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "ownerid",
                table: "Interesse",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "programmeringid",
                table: "Comment",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "ownerid",
                table: "Comment",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "ownerid",
                table: "Betaling",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_Betaling_Gebruiker_ownerid",
                table: "Betaling",
                column: "ownerid",
                principalTable: "Gebruiker",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Gebruiker_ownerid",
                table: "Comment",
                column: "ownerid",
                principalTable: "Gebruiker",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Programmering_programmeringid",
                table: "Comment",
                column: "programmeringid",
                principalTable: "Programmering",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Interesse_Gebruiker_ownerid",
                table: "Interesse",
                column: "ownerid",
                principalTable: "Gebruiker",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Logs_Gebruiker_gebruikerid",
                table: "Logs",
                column: "gebruikerid",
                principalTable: "Gebruiker",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Programmering_Zaal_zaalNr",
                table: "Programmering",
                column: "zaalNr",
                principalTable: "Zaal",
                principalColumn: "zaalNr");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservering_Gebruiker_ownerid",
                table: "Reservering",
                column: "ownerid",
                principalTable: "Gebruiker",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservering_Programmering_programmeringid",
                table: "Reservering",
                column: "programmeringid",
                principalTable: "Programmering",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservering_Zaal_zaalNr",
                table: "Reservering",
                column: "zaalNr",
                principalTable: "Zaal",
                principalColumn: "zaalNr");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Betaling_Gebruiker_ownerid",
                table: "Betaling");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Gebruiker_ownerid",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Programmering_programmeringid",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Interesse_Gebruiker_ownerid",
                table: "Interesse");

            migrationBuilder.DropForeignKey(
                name: "FK_Logs_Gebruiker_gebruikerid",
                table: "Logs");

            migrationBuilder.DropForeignKey(
                name: "FK_Programmering_Zaal_zaalNr",
                table: "Programmering");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservering_Gebruiker_ownerid",
                table: "Reservering");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservering_Programmering_programmeringid",
                table: "Reservering");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservering_Zaal_zaalNr",
                table: "Reservering");

            migrationBuilder.AlterColumn<int>(
                name: "zaalNr",
                table: "Reservering",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "programmeringid",
                table: "Reservering",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ownerid",
                table: "Reservering",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "zaalNr",
                table: "Programmering",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "gebruikerid",
                table: "Logs",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ownerid",
                table: "Interesse",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "programmeringid",
                table: "Comment",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ownerid",
                table: "Comment",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ownerid",
                table: "Betaling",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Betaling_Gebruiker_ownerid",
                table: "Betaling",
                column: "ownerid",
                principalTable: "Gebruiker",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Gebruiker_ownerid",
                table: "Comment",
                column: "ownerid",
                principalTable: "Gebruiker",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Programmering_programmeringid",
                table: "Comment",
                column: "programmeringid",
                principalTable: "Programmering",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Interesse_Gebruiker_ownerid",
                table: "Interesse",
                column: "ownerid",
                principalTable: "Gebruiker",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Logs_Gebruiker_gebruikerid",
                table: "Logs",
                column: "gebruikerid",
                principalTable: "Gebruiker",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Programmering_Zaal_zaalNr",
                table: "Programmering",
                column: "zaalNr",
                principalTable: "Zaal",
                principalColumn: "zaalNr",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservering_Gebruiker_ownerid",
                table: "Reservering",
                column: "ownerid",
                principalTable: "Gebruiker",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservering_Programmering_programmeringid",
                table: "Reservering",
                column: "programmeringid",
                principalTable: "Programmering",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservering_Zaal_zaalNr",
                table: "Reservering",
                column: "zaalNr",
                principalTable: "Zaal",
                principalColumn: "zaalNr",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
