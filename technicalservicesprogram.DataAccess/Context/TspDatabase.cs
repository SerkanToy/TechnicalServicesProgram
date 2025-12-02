using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using technicalservicesprogram.DataAccess.Configurations.CreateUpdateDelete;
using technicalservicesprogram.DataAccess.Configurations.UserCon;
using technicalservicesprogram.Entities.Core.CreateUpdateDelete;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.DataAccess.Context
{
    public class TspDatabase: IdentityDbContext<UserApp, RoleApp, string, UserClaim, UserRole, UserLogin, RoleClaim, UserToken>
    {
        public TspDatabase(DbContextOptions<TspDatabase> options) : base(options)
        {
        }

        // Kullanıcı işlemleri
        public DbSet<UserApp> UserApp { get; set; }
        public DbSet<RoleApp> RoleApp { get; set; }
        public DbSet<UserClaim> UserClaim { get; set; }
        public DbSet<UserRole> UserRole { get; set; }
        public DbSet<UserLogin> UserLogin { get; set; }
        public DbSet<RoleClaim> RoleClaim { get; set; }
        public DbSet<UserToken> UserToken { get; set; }


        // Oluşturma, Güncelleme, Silme işlemleri tarihleri
        public DbSet<DateUserCreate> DateUserCreate { get; set; }
        public DbSet<TimeUserCreate> TimeUserCreate { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.ConfigureWarnings(w => w.Ignore(RelationalEventId.PendingModelChangesWarning));
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new UserConfiguration());
            builder.ApplyConfiguration(new RoleConfiguration());
            builder.ApplyConfiguration(new UserClaimConfiguration());
            builder.ApplyConfiguration(new UserRoleConfiguration());
            builder.ApplyConfiguration(new UserLoginConfiguration());
            builder.ApplyConfiguration(new RoleClaimConfiguration());
            builder.ApplyConfiguration(new UserTokenConfiguration());


            builder.ApplyConfiguration(new DateUserCreateConfiguration());
            builder.ApplyConfiguration(new TimeUserCreateConfiguration());

            builder.ApplyConfigurationsFromAssembly(typeof(TspDatabase).Assembly);

            base.OnModelCreating(builder);
        }

    }
}
