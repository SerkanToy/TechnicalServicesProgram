using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace technicalservicesprogram.Broadcast.Controllers
{
    [Route("giris-yap/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpGet]
        [ActionName("giris-yap")]
        public IActionResult Login()
        {
            return Ok("Auth Controller is working.");
        }
    }
}
