using AutoMapper;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using technicalservicesprogram.Business.Abstraction;
using technicalservicesprogram.Entities.Core;
using technicalservicesprogram.Entities.Core.Users;
using technicalservicesprogram.Entities.DTo.Login;
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

        public UserService(UserManager<UserApp> userManager)
        {
            this.userManager = userManager;
        }

        public IQueryable<UserApp> GetAll()
        {
            return userManager.Users;
        }

        public Task<ApiResponse> Login(LoginDTO loginDTO)
        {
            throw new NotImplementedException();
        }

        public Task<ApiResponse> Register(UserAddDto userAddDto)
        {
            throw new NotImplementedException();
        }
    }
}
