using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using technicalservicesprogram.Business.Abstraction;
using technicalservicesprogram.Business.Concrete;
using technicalservicesprogram.Entities.Core;

namespace technicalservicesprogram.Business
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddBusiness(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAutoMapper(x => { },typeof(DependencyInjection).Assembly);
            services.AddTransient(typeof(IAuthService),typeof(AuthService));
            services.AddTransient(typeof(ApiResponse));

            return services;
        }
    }
}
