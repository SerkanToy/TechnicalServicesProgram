using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.DataAccess.Configurations.UserCon
{
    public class UserTokenConfiguration : IEntityTypeConfiguration<UserToken>
    {
        public void Configure(EntityTypeBuilder<UserToken> builder)
        {
            builder.ToTable("UserTokens");
            builder.HasKey(ut => new { ut.UserId, ut.LoginProvider, ut.Name });
        }
    }
}
