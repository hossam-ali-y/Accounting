using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AccountingAPI.Data
{
        public class AccountingDBContext : DbContext
        {
                public AccountingDBContext(DbContextOptions dbContextOptions)
                : base(dbContextOptions)
                {

                }

                public override Task<int> SaveChangesAsync(
                    bool acceptAllChangesOnSuccess,
                    CancellationToken cancellationToken = default(CancellationToken))
                {
                        var AddedEntities = ChangeTracker.Entries()
                            .Where(E => E.State == EntityState.Added)
                            .ToList();
                        // var userId = _httpContextAccessor.HttpContext.UserId();

                        AddedEntities.ForEach(E =>
                        {
                                var Properties = E.Entity.GetType().GetProperties();
                                foreach (var Property in Properties)
                                {
                                        if (Property.Name == "CreateDate")
                                        {
                                                if (E.Property("CreateDate").CurrentValue == null)
                                                        E.Property("CreateDate").CurrentValue = DateTime.Now;
                                        }

                                        // if (Property.Name == "UserId" && userId > 0)
                                        // {
                                        //         // if (E.Property("CreateDate").CurrentValue == null)

                                        //         E.Property("UserId").CurrentValue = userId;
                                        // }
                                }

                        });

                        var EditedEntities = ChangeTracker.Entries()
                            .Where(E => E.State == EntityState.Modified)
                            .ToList();

                        EditedEntities.ForEach(E =>
                        {
                                var Properties = E.Entity.GetType().GetProperties();
                                foreach (var Property in Properties)
                                {
                                        if (Property.Name == "ModifiedDate")
                                                E.Property("ModifiedDate").CurrentValue = DateTime.Now;
                                        // if (Property.Name == "UserId" && userId > 0 && E.Property("UserId").CurrentValue == null)
                                        // {
                                        //         // if (E.Property("CreateDate").CurrentValue == null)
                                        //         E.Property("UserId").CurrentValue = _httpContextAccessor.HttpContext.UserId();
                                        // }
                                }
                        });

                        return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
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


                protected override void OnModelCreating(ModelBuilder modelBuilder)
                {
                        modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

                        modelBuilder.Entity<Account>(entity =>
                        {
                                entity.HasIndex(e => e.Id, "IX_Accounts");

                                entity.Property(e => e.AccountName).IsRequired();

                                entity.Property(e => e.Cid).HasColumnName("CId");

                                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                                entity.Property(e => e.OpeningAmount).HasColumnType("decimal(18, 0)");

                                entity.Property(e => e.ParentCid).HasColumnName("Parent_CId");

                                entity.Property(e => e.ParentId).HasColumnName("Parent_Id");

                                // entity.HasOne(d => d.User)
                                // .WithMany(p => p.Accounts)
                                // .HasForeignKey(d => d.UserId)
                                // .HasConstraintName("FK_Accounts_Users");
                        });

                        modelBuilder.Entity<Ledger>(entity =>
                  {
                          //   entity.ToTable("Ledger");

                          entity.Property(e => e.AccountCid).HasColumnName("Account_CId");

                          entity.Property(e => e.AccountId).HasColumnName("Account_Id");

                          entity.Property(e => e.Amount).HasColumnType("decimal(18, 0)");

                          entity.Property(e => e.CreateDate).HasColumnType("datetime");

                          entity.Property(e => e.YearId).HasColumnName("Year_Id");
                          entity.Property(e => e.UserId).HasColumnName("User_Id");

                          entity.HasOne(d => d.Account)
                  .WithMany(p => p.Ledgers)
                  .HasForeignKey(d => d.AccountId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_Ledger_Accunts");

                          //           entity.HasOne(d => d.User)
                          //   .WithMany(p => p.Ledgers)
                          //   .HasForeignKey(d => d.UserId)
                          //   .HasConstraintName("FK_Ledger_Users");

                          //           entity.HasOne(d => d.Year)
                          //   .WithMany(p => p.Ledgers)
                          //   .HasForeignKey(d => d.YearId)
                          //   .OnDelete(DeleteBehavior.ClientSetNull)
                          //   .HasConstraintName("FK_Ledger_Years");
                  });

                }

        }
}