﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using technicalservicesprogram.DataAccess.Context;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.DataAccess
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("SqlServer")!;
            services.AddDbContext<TspDatabase>(opt =>
            {
                opt.UseSqlServer(connectionString);
            });

            services.AddIdentityCore<UserApp>()
                .AddRoles<RoleApp>()
                .AddEntityFrameworkStores<TspDatabase>();

            /*services.Scan(selector => selector
                .FromAssemblies(typeof(DependencyInjection).Assembly)
                .AddClasses(publicOnly: false)
                .UsingRegistrationStrategy(RegistrationStrategy.Skip)
                .AsMatchingInterface()
                .WithScopedLifetime());*/

            return services;
        }
    }
}
