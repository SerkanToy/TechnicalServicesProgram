using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using technicalservicesprogram.Entities.Core.CreateUpdateDelete;

namespace technicalservicesprogram.DataAccess.Configurations.CreateUpdateDelete
{
    public class DateUserCreateConfiguration : IEntityTypeConfiguration<DateUserCreate>
    {
        public void Configure(EntityTypeBuilder<DateUserCreate> builder)
        {
            builder.HasKey(dc => dc.Id);
            builder.HasOne(dc => dc.UserApp).WithMany().HasForeignKey(dc => dc.UserId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
