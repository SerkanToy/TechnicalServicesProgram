using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace technicalservicesprogram.Entities.DTo.Users
{
    public class UserAddDto
    {
        public string Name { get; set; }
        public string SurName { get; set; }
        public string SicilNo { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string PasswordHash { get; set; }
        public string Salt { get; set; }
    }
}
