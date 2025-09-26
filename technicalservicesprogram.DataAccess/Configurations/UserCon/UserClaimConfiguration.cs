using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.DataAccess.Configurations.UserCon
{
    public class UserClaimConfiguration : IEntityTypeConfiguration<UserClaim>
    {
        public void Configure(EntityTypeBuilder<UserClaim> builder)
        {
            builder.ToTable("UserClaims");
            builder.HasKey(uc => uc.Id);
        }
    }
}
