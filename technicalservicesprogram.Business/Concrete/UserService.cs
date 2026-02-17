using AutoMapper;
using Microsoft.AspNetCore.Identity;
using technicalservicesprogram.Business.Abstraction;
using technicalservicesprogram.Entities.Core;
using technicalservicesprogram.Entities.Core.Users;
using technicalservicesprogram.Entities.DTo.Users;

namespace technicalservicesprogram.Business.Concrete
{
    public class UserService: IUserService
    {
        private readonly UserManager<UserApp> userManager;
        private readonly RoleManager<RoleApp> roleManager;
        private readonly IMapper mapper;
        private readonly ApiResponse apiResponse;        
        private string secretKey;

        public UserService(UserManager<UserApp> userManager, 
            ApiResponse apiResponse)
        {
            this.userManager = userManager;
            this.apiResponse = apiResponse;
        }

        public IQueryable<UserApp> GetAll()
        {
            return userManager.Users;
        }

        public async Task<ApiResponse> Register(UserAddDto userAddDto)
        {
            var isUserExist = await userManager.FindByEmailAsync(userAddDto.Email) != null ? true:false;
            if(isUserExist)
            {
                apiResponse.StatusCode = System.Net.HttpStatusCode.OK;
                apiResponse.IsSuccess = false;
                apiResponse.Errors = new List<string>() { "Bu email adresi zaten kayıtlı." };
                apiResponse.Result = null;
                return apiResponse;
            }

            UserApp user = new UserApp()
            {
                Name = userAddDto.Name,
                SurName = userAddDto.SurName,
                SicilNo = userAddDto.SicilNo,
                Email = userAddDto.Email,
                PhoneNumber = userAddDto.PhoneNumber,
                PasswordHash = userAddDto.PasswordHash,
                Salt = userAddDto.Salt
            };

            var result = await userManager.CreateAsync(user);

            if(result.Succeeded)
            {
                await userManager.AddToRoleAsync(user, "NormalUser");
                apiResponse.StatusCode = System.Net.HttpStatusCode.Created;
                apiResponse.IsSuccess = true;
                apiResponse.Errors = new List<string>();
                apiResponse.Result = user;
                return apiResponse;
            }

            apiResponse.IsSuccess = false;
            result.Errors.ToList().ForEach(x => apiResponse .Errors.Add(x.Description) );
            apiResponse.Result = user;
            return apiResponse;
        }
    }
}
