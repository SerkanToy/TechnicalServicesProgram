using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace technicalservicesprogram.Broadcast.Controllers
{
    [Route("giris-yap/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpGet]
        [ActionName("giris-yap")]
        public IActionResult Index()
        {
            return Ok("Auth Controller is working.");
        }
    }
}
