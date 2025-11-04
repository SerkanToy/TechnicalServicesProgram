using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Security.Cryptography;
using technicalservicesprogram.Entities.Core.CreateUpdateDelete;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.DataAccess.Configurations.UserCon
{
    public class UserConfiguration : IEntityTypeConfiguration<UserApp>
    {
        public void Configure(EntityTypeBuilder<UserApp> builder)
        {
            builder.ToTable("Users");
            builder.HasKey(u => u.Id);
            builder.HasIndex(u => u.Email).IsUnique();
            builder.HasIndex(u => u.SicilNo).IsUnique();
            builder.HasMany(dc => dc.DateUserCreates).WithOne(dc => dc.UserApp).OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(dc => dc.TimeUserCreates).WithOne(dc => dc.UserApp).OnDelete(DeleteBehavior.NoAction);
            builder.HasData(User());
        }

        private UserApp User()
        {
            var user = new UserApp
            {
                //Id = Guid.Parse("FF4DBF3C-CE20-4E35-BEFD-1F1D89BD56D5"),
                Email = "stoy@sakarya.edu.tr",
                PhoneNumber = "0(564) 295 50 92",
                Name = "Serkan",
                SurName = "TOY",
                UserName = "stoy",
                NormalizedUserName = "STOY",
                NormalizedEmail = "STOY@SAKARYA.EDU.TR",
                SicilNo = "944",
                SecurityStamp = Guid.NewGuid().ToString(),
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                Salt = CreatePasswordHash("Qwe123").Item2,
                PasswordHash = CreatePasswordHash("Qwe123").Item1                
            };
            return user;
        }

        private Tuple<string, string> CreatePasswordHash(string password)
        {
            byte[] salt = RandomNumberGenerator.GetBytes(128 / 8);
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password!,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8));
            return Tuple.Create(hashed, salt.ToString())!;
        }


    }
}
