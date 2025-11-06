using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace technicalservicesprogram.Entities.Core
{
    public class ApiResponse
    {
        public ApiResponse()
        {
            Errors = new List<string>();
        }
        public HttpStatusCode StatusCode { get; set; }
        public bool IsSuccess { get; set; }
        public List<string> Errors { get; set; }
        public object Result { get; set; }
    }
}
