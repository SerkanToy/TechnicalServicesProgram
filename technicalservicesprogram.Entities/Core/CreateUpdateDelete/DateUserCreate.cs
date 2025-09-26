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
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Description { get; set; }
        public UserApp UserApp { get; set; }
        public string UserId { get; set; }
    }
}
