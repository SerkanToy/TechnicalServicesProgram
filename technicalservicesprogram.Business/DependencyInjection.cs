using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace technicalservicesprogram.Business
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddBusiness(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAutoMapper(x => { },typeof(DependencyInjection).Assembly);

            return services;
        }
    }
}
