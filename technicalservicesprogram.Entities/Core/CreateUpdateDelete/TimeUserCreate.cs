using System.ComponentModel.DataAnnotations.Schema;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.Entities.Core.CreateUpdateDelete
{
    public class TimeUserCreate
    {
        public TimeUserCreate()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Id { get; set; }
        public TimeOnly CreateTime { get; set; }
        public string UserName { get; set; }
        public UserApp UserApp { get; set; }
        [ForeignKey("UserApp")]
        public string UserAppId { get; set; }
    }
}
