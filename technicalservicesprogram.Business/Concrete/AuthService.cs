using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using technicalservicesprogram.Business.Abstraction;
using technicalservicesprogram.DataAccess.Context;
using technicalservicesprogram.Entities.Core;
using technicalservicesprogram.Entities.Core.Enum;
using technicalservicesprogram.Entities.Core.Users;
using technicalservicesprogram.Entities.DTo.Login;

namespace technicalservicesprogram.Business.Concrete
{
    public class AuthService: IAuthService
    {
        private readonly UserManager<UserApp> userManager;
        private readonly TspDatabase tspDatabase;
        private readonly ApiResponse response;
        private string secretKey;
        public AuthService(TspDatabase tspDatabase, ApiResponse response, IConfiguration _configuration, UserManager<UserApp> userManager)
        {
            this.tspDatabase = tspDatabase;
            this.response = response;
            secretKey = _configuration.GetSection("AppSettings:Secret").Value!;
            this.userManager = userManager;
        }

        public async Task<ApiResponse> Login(LoginDTO loginDTO)
        {
            UserApp user = tspDatabase.UserApp.FirstOrDefault(x => x.Email.ToLower() == loginDTO.Email.ToLower());

            if(user is not null)
            {
                bool isPasswordValid = await userManager.CheckPasswordAsync(user, loginDTO.Password);
                if (isPasswordValid)
                {
                    response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    response.IsSuccess = false;
                    response.Errors = new List<string> { "Kullanıcı veya Parola Hatalı" };
                    return response;
                }

                var role = await userManager.GetRolesAsync(user);
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                byte[] key = System.Text.Encoding.ASCII.GetBytes(secretKey);

                SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new System.Security.Claims.ClaimsIdentity(new[]
                    {
                        new System.Security.Claims.Claim("Id", user.Id.ToString()),
                        new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Name, $"{user.UserName} {user.SurName.ToUpper()}"),
                        new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Email, $"{user.Email}"),
                        new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Role, role.FirstOrDefault() ?? UserType.NormalUser.ToString()),
                    }),
                    Expires = DateTime.UtcNow.AddSeconds(5),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };

                SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

                response.StatusCode = System.Net.HttpStatusCode.OK;
                response.IsSuccess = true;
                response.Result = new TokenDTO
                {
                    Email = user.Email!,
                    Token = tokenHandler.WriteToken(token)
                };

                return response;
            }


            response.StatusCode = System.Net.HttpStatusCode.BadRequest;
            response.IsSuccess = false;
            response.Errors = new List<string> { "Kullanıcı veya Parola Hatalı" };
            return response;
        }
    }
}
