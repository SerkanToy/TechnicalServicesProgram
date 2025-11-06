using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace technicalservicesprogram.Business.Abstraction
{
    public interface IAuthService
    {
        Task<objdect> Login(string username, string password);
    }
}
