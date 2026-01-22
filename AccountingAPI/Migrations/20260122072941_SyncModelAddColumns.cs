using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AccountingAPI.Migrations
{
    public partial class SyncModelAddColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            

            migrationBuilder.Sql(@"
IF COL_LENGTH('Ledgers','YearId') IS NOT NULL AND COL_LENGTH('Ledgers','Year_Id') IS NULL
    EXEC sp_rename N'Ledgers.YearId', N'Year_Id', N'COLUMN';
");

            migrationBuilder.Sql(@"
IF COL_LENGTH('Ledgers','UserId') IS NOT NULL AND COL_LENGTH('Ledgers','User_Id') IS NULL
    EXEC sp_rename N'Ledgers.UserId', N'User_Id', N'COLUMN';
");

            migrationBuilder.Sql(@"
IF COL_LENGTH('Ledgers','AccountId') IS NOT NULL AND COL_LENGTH('Ledgers','Account_Id') IS NULL
    EXEC sp_rename N'Ledgers.AccountId', N'Account_Id', N'COLUMN';
");

            migrationBuilder.Sql(@"
IF COL_LENGTH('Ledgers','AccountCid') IS NOT NULL AND COL_LENGTH('Ledgers','Account_CId') IS NULL
    EXEC sp_rename N'Ledgers.AccountCid', N'Account_CId', N'COLUMN';
");

            migrationBuilder.Sql(@"
IF EXISTS(SELECT 1 FROM sys.indexes WHERE name = 'IX_Ledgers_AccountId' AND object_id = OBJECT_ID('Ledgers'))
    EXEC sp_rename N'Ledgers.IX_Ledgers_AccountId', N'IX_Ledgers_Account_Id';
");

            migrationBuilder.Sql(@"
IF COL_LENGTH('Accounts','Cid') IS NOT NULL AND COL_LENGTH('Accounts','CId') IS NULL
    EXEC sp_rename N'Accounts.Cid', N'CId', N'COLUMN';
");

            migrationBuilder.Sql(@"
IF COL_LENGTH('Accounts','ParentId') IS NOT NULL AND COL_LENGTH('Accounts','Parent_Id') IS NULL
    EXEC sp_rename N'Accounts.ParentId', N'Parent_Id', N'COLUMN';
");

            migrationBuilder.Sql(@"
IF COL_LENGTH('Accounts','ParentCid') IS NOT NULL AND COL_LENGTH('Accounts','Parent_CId') IS NULL
    EXEC sp_rename N'Accounts.ParentCid', N'Parent_CId', N'COLUMN';
");

            migrationBuilder.AlterDatabase(
                collation: "SQL_Latin1_General_CP1_CI_AS");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Ledgers",
                type: "datetime",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Amount",
                table: "Ledgers",
                type: "decimal(18,0)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "OpeningAmount",
                table: "Accounts",
                type: "decimal(18,0)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Accounts",
                type: "datetime",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "AccountName",
                table: "Accounts",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Accounts",
                type: "datetime2",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Accounts",
                table: "Accounts",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_Parent_Id",
                table: "Accounts",
                column: "Parent_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Accounts_Accounts_Parent_Id",
                table: "Accounts",
                column: "Parent_Id",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Ledger_Accunts",
                table: "Ledgers",
                column: "Account_Id",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Accounts_Accounts_Parent_Id",
                table: "Accounts");

            migrationBuilder.DropForeignKey(
                name: "FK_Ledger_Accunts",
                table: "Ledgers");

            migrationBuilder.DropIndex(
                name: "IX_Accounts",
                table: "Accounts");

            migrationBuilder.DropIndex(
                name: "IX_Accounts_Parent_Id",
                table: "Accounts");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Accounts");

            migrationBuilder.RenameColumn(
                name: "Year_Id",
                table: "Ledgers",
                newName: "YearId");

            migrationBuilder.RenameColumn(
                name: "User_Id",
                table: "Ledgers",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "Account_Id",
                table: "Ledgers",
                newName: "AccountId");

            migrationBuilder.RenameColumn(
                name: "Account_CId",
                table: "Ledgers",
                newName: "AccountCid");

            migrationBuilder.RenameIndex(
                name: "IX_Ledgers_Account_Id",
                table: "Ledgers",
                newName: "IX_Ledgers_AccountId");

            migrationBuilder.RenameColumn(
                name: "CId",
                table: "Accounts",
                newName: "Cid");

            migrationBuilder.RenameColumn(
                name: "Parent_Id",
                table: "Accounts",
                newName: "ParentId");

            migrationBuilder.RenameColumn(
                name: "Parent_CId",
                table: "Accounts",
                newName: "ParentCid");

            migrationBuilder.AlterDatabase(
                oldCollation: "SQL_Latin1_General_CP1_CI_AS");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Ledgers",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Amount",
                table: "Ledgers",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,0)");

            migrationBuilder.AlterColumn<decimal>(
                name: "OpeningAmount",
                table: "Accounts",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,0)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Accounts",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "AccountName",
                table: "Accounts",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddForeignKey(
                name: "FK_Ledgers_Accounts_AccountId",
                table: "Ledgers",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
