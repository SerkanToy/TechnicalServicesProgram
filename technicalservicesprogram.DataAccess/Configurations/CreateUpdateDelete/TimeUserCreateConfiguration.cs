using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using technicalservicesprogram.Entities.Core.CreateUpdateDelete;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.DataAccess.Configurations.CreateUpdateDelete
{
    public class TimeUserCreateConfiguration : IEntityTypeConfiguration<TimeUserCreate>
    {
        public void Configure(EntityTypeBuilder<TimeUserCreate> builder)
        {
            builder.HasKey(dc => dc.Id);
            builder.HasOne(dc => dc.UserApp).WithMany().HasForeignKey(dc => dc.UserId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
