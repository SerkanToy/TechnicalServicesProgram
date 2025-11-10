using Microsoft.AspNetCore.Mvc;
using technicalservicesprogram.Business.Abstraction;
using technicalservicesprogram.Entities.DTo.Login;

namespace technicalservicesprogram.Broadcast.Controllers
{
    [Route("giris/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService authService;
        public AuthController(IAuthService authService)
        {
            this.authService = authService;
        }

        [HttpPost]
        [ActionName("giris-yap")]
        public async  Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        {
            var result = await authService.Login(loginDTO);
            if(result.IsSuccess)
                return Ok(result);
            else
                return BadRequest(result);
        }
    }
}
