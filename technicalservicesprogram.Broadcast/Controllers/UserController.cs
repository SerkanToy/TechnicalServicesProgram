using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using technicalservicesprogram.DataAccess.Repositories;
using technicalservicesprogram.Entities.Core;
using technicalservicesprogram.Entities.Core.CreateUpdateDelete;
using technicalservicesprogram.Entities.Core.Users;
using technicalservicesprogram.Entities.DTo.Users;

namespace technicalservicesprogram.Broadcast.Controllers
{
    [Route("kullanici/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IGenericRepository<DateUserCreate> dateRepository;
        private readonly IGenericRepository<TimeUserCreate> timeRepository;
        private UserManager<UserApp> userManager;
        private readonly IMapper _mapper;
        private readonly ApiResponse apiResponse;
        public UserController(IGenericRepository<TimeUserCreate> timeRepository, 
                            IGenericRepository<DateUserCreate> dateRepository,
                            UserManager<UserApp> userManager,
                            IMapper _mapper,
                            ApiResponse apiResponse)
        {
            this.timeRepository = timeRepository;
            this.dateRepository = dateRepository;
            this.userManager = userManager;
            this._mapper = _mapper;
            this.apiResponse = apiResponse;
        }

        [Authorize(Roles = "SuperUser")]
        [HttpGet,ActionName("kullanicilar")]
        public IActionResult All()
        {
            var users = userManager.Users.ToList();
            apiResponse.StatusCode = System.Net.HttpStatusCode.OK;
            apiResponse.IsSuccess = users.Any();
            apiResponse.Result = _mapper.Map<List<UserDto>>(users);
            return Ok(apiResponse);
        }

        [ActionName("kayit")]
        [HttpPost]
        public async Task<IActionResult> Add([FromBody] UserApp model)
        {
            UserApp userApp = new UserApp()
            {
                //Id = Guid.NewGuid().ToString(),
                Name = model.Name,
                SurName = model.SurName,                
                Email = model.Email,
                //SecurityStamp = Guid.NewGuid().ToString(),
                //NormalizedEmail = model.Email.ToUpper(),
                PhoneNumber = model.PhoneNumber,
                UserName = model.Email.Split("@")[0],
                //NormalizedUserName = model.Email.Split("@")[0].ToUpper(),
                SicilNo = model.SicilNo,
                //PasswordHash = model.PasswordHash,
                Salt = model.Salt,
            };

            IdentityResult result = await userManager.CreateAsync(userApp, model.PasswordHash!);

            //userRepository.Create(userApp);
            
            if(!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            timeRepository.Create(new TimeUserCreate()
            {
                CreateTime = TimeOnly.FromDateTime(DateTime.Now),
                UserName = model.Email.Split("@")[0],
                UserAppId = userApp.Id.ToString()
            });

            dateRepository.Create(new DateUserCreate()
            {
                CreateDate = DateOnly.FromDateTime(DateTime.Now),
                UserName = model.Email.Split("@")[0],
                UserAppId = userApp.Id.ToString()
            });

            dateRepository.Save();
            return Ok(model);
        }


    }
}
