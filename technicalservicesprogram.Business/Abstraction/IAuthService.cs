using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using technicalservicesprogram.Entities.Core;
using technicalservicesprogram.Entities.DTo.Login;

namespace technicalservicesprogram.Business.Abstraction
{
    public interface IAuthService
    {
        Task<ApiResponse> Login(LoginDTO loginDTO);
    }
}
