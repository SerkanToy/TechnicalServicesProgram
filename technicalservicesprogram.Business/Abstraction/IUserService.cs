using technicalservicesprogram.Entities.Core;
using technicalservicesprogram.Entities.DTo.Login;
using technicalservicesprogram.Entities.DTo.Users;

namespace technicalservicesprogram.Business.Abstraction
{
    public interface IUserService
    {
        Task<ApiResponse> Register(UserAddDto userAddDto);
        Task<ApiResponse> Login(LoginDTO loginDTO);
    }


}
