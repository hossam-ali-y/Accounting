using Microsoft.EntityFrameworkCore;

namespace AccountingAPI.Data
{
        public class AccountingDBContext : DbContext
        {
                public AccountingDBContext(DbContextOptions dbContextOptions)
                : base(dbContextOptions)
                {

                }
                public virtual DbSet<Account> Accounts { get; set; }
                public virtual DbSet<Ledger> Ledgers { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=HOSSAM;Database=AccountingDB;Trusted_Connection=True");
            }

        }

    }
}