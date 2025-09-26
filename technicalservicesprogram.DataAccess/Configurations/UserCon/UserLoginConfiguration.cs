using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.DataAccess.Configurations.UserCon
{
    public class UserLoginConfiguration : IEntityTypeConfiguration<UserLogin>
    {
        public void Configure(EntityTypeBuilder<UserLogin> builder)
        {
            builder.ToTable("UserLogins");
            builder.HasKey(ul => new { ul.LoginProvider, ul.ProviderKey });
        }
    }
}
