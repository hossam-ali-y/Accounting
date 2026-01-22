using Microsoft.EntityFrameworkCore.Migrations;

namespace AccountingAPI.Migrations
{
    public partial class Account_ParentId_Isnullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Accounts_Accounts_Parent_Id",
                table: "Accounts");

            migrationBuilder.AlterColumn<int>(
                name: "Parent_Id",
                table: "Accounts",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Accounts_Accounts_Parent_Id",
                table: "Accounts",
                column: "Parent_Id",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Accounts_Accounts_Parent_Id",
                table: "Accounts");

            migrationBuilder.AlterColumn<int>(
                name: "Parent_Id",
                table: "Accounts",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Accounts_Accounts_Parent_Id",
                table: "Accounts",
                column: "Parent_Id",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
