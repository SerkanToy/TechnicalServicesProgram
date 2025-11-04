using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using technicalservicesprogram.DataAccess.Context;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.DataAccess.Repositories.UserRepositorys
{
    public class UserRepository : GenericRepository<UserApp>, IUserRepository
    {
        public UserRepository(TspDatabase dbCtx) : base(dbCtx)
        {
        }
    }
}
