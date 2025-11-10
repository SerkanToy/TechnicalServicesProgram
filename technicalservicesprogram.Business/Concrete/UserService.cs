using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using technicalservicesprogram.Business.Abstraction;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.Business.Concrete
{
    public class UserService: IUserService
    {
        private readonly UserManager<UserApp> userManager;
        public UserService(UserManager<UserApp> userManager)
        {
            this.userManager = userManager;
        }

        public IQueryable<UserApp> GetAll()
        {
            return userManager.Users;
        }   

    }
}
