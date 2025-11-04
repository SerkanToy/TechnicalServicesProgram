using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace technicalservicesprogram.DataAccess.Repositories
{
    public interface IGenericRepository<T> where T : class, new()
    {
        IQueryable<T> GetAll();

        public void Create(T entity);

        public void Delete(Guid id);

        public T GetById(Guid id);

        public void Update(T entity);
        public void Save();
    }
}
