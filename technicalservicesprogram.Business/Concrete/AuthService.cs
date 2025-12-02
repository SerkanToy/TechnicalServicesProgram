using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
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
        private string audience;
        private string issuer;
        public AuthService(TspDatabase tspDatabase, ApiResponse response, IConfiguration _configuration, UserManager<UserApp> userManager)
        {
            this.tspDatabase = tspDatabase;
            this.response = response;
            secretKey = _configuration.GetSection("AppSettings:Secret").Value!;
            audience = _configuration.GetSection("AppSettings:Audience").Value!;
            issuer = _configuration.GetSection("AppSettings:Issuer").Value!;
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

                List<Claim> claims = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim("FullName", $"{user.Name.ToUpper()} {user.SurName.ToUpper()}"),
                    new Claim(ClaimTypes.Name, $"{user.UserName}"),
                    new Claim(ClaimTypes.Email, $"{user.Email}")                    
                };

                if(role is not null)
                {
                    foreach (var item in role)
                    {
                        claims.Add(new Claim(ClaimTypes.Role, $"{item}"));
                    }
                }

                SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
                {
                    Audience = audience,
                    Issuer = issuer,    
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };

                SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

                response.StatusCode = System.Net.HttpStatusCode.OK;
                response.IsSuccess = true;
                response.Result = new TokenDTO
                {
                    Email = user.Email!,
                    AccessToken = tokenHandler.WriteToken(token),
                    RefreshToken = Guid.NewGuid().ToString()
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
