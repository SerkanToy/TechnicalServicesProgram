using System.ComponentModel.DataAnnotations.Schema;
using technicalservicesprogram.Entities.Core.Users;

namespace technicalservicesprogram.Entities.Core.CreateUpdateDelete
{
    public class DateUserCreate
    {
        public DateUserCreate()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Id { get; set; }
        public DateOnly CreateDate { get; set; }
        public string UserName { get; set; }
        public UserApp UserApp { get; set; }
        [ForeignKey("UserApp")]
        public string UserAppId { get; set; }
    }
}
