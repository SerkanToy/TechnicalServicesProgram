using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace technicalservicesprogram.Entities.Core.Users
{
    public class RoleApp: IdentityRole<string>
    {
        public RoleApp()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}
