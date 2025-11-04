using AutoMapper;
using technicalservicesprogram.Entities.Core.Users;
using technicalservicesprogram.Entities.DTo.Users;

namespace technicalservicesprogram.Business.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserApp, UserDto>().ReverseMap();
        }
    }
}
