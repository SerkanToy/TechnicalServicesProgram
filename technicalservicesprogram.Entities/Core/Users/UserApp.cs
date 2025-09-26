using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using technicalservicesprogram.Entities.Core.CreateUpdateDelete;

namespace technicalservicesprogram.Entities.Core.Users
{
    public class UserApp: IdentityUser<string>
    {
        public UserApp()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string SicilNo { get; set; }
        public string Salt { get; set; }
        public ICollection<TimeUserCreate> TimeUserCreates { get; set; }
        public ICollection<DateUserCreate> DateUserCreates { get; set; }
    }
}
