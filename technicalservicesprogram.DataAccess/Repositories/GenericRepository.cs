using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using technicalservicesprogram.DataAccess.Context;

namespace technicalservicesprogram.DataAccess.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T>  where T : class, new() 
    {
        readonly TspDatabase _ctx;
        readonly DbSet<T> _dbSet;

        public GenericRepository(TspDatabase dbCtx)
        {
            _ctx = dbCtx;
            _dbSet = _ctx.Set<T>();
        }

        public IQueryable<T> GetAll()
        {
            return _dbSet;
        }

        public void Create(T entity)
        {
            _dbSet.Add(entity);
        }

        public void Delete(Guid id)
        {
            _dbSet.Remove(GetById(id));
        }

        public T GetById(Guid id)
        {
            var find = _dbSet.Find(id);
            return find;
        }

        public void Update(T entity)
        {
            _ctx.SaveChanges();
        }

        public void Save()
        {
            _ctx.SaveChanges();
        }
    }
}
