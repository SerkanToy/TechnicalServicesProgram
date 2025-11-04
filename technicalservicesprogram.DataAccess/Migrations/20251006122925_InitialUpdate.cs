using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace technicalservicesprogram.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class InitialUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "2fff5c5b-378a-45de-ab29-159d2543990f");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "34e8bd8e-246b-4fb3-a477-a3ff4cf631f2");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "IsActive", "IsDeleted", "LockoutEnabled", "LockoutEnd", "Name", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "Salt", "SecurityStamp", "SicilNo", "SurName", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "089d6e50-2972-43be-9f8f-6d379e146fe3", 0, "e03f424a-fbb4-4a95-9ec9-c4a8f76bbb69", "stoy@sakarya.edu.tr", false, true, false, false, null, "Serkan", "STOY@SAKARYA.EDU.TR", "STOY", "miism5gLi6mAAECA4DEdc2Uatfz0eDjpNcJRUcFaenA=", "0(564) 295 50 92", false, "System.Byte[]", "362f4c6b-1634-4bae-86f7-5205836f3c91", "944", "TOY", false, "stoy" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "089d6e50-2972-43be-9f8f-6d379e146fe3");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "9a4f0a34-7636-403c-a76b-dff0641abb20");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "IsActive", "IsDeleted", "LockoutEnabled", "LockoutEnd", "Name", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "Salt", "SecurityStamp", "SicilNo", "SurName", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "2fff5c5b-378a-45de-ab29-159d2543990f", 0, "0b6db7ca-42c4-4347-9079-bac7c5c34d03", "stoy@sakarya.edu.tr", false, true, false, false, null, "Serkan", "STOY@SAKARYA.EDU.TR", "STOY", "xGYrQsoMNQs5/fB8klvmi9JK+V18QDfTe4SB1s/+TTo=", "0(564) 295 50 92", false, "System.Byte[]", "30aaf8d6-8707-4b51-b43d-5ac6e3c9aa0c", "944", "TOY", false, "stoy" }
                });
        }
    }
}
