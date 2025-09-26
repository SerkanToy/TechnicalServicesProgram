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
    public class RoleConfiguration : IEntityTypeConfiguration<RoleApp>
    {
        public void Configure(EntityTypeBuilder<RoleApp> builder)
        {
            builder.ToTable("Roles");
            builder.HasKey(u => u.Id);
        }
    }
}
