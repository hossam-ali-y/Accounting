using System;
using System.Collections.Generic;
// using DSchoolsAPI.DataLayer.Interface;

#nullable disable

namespace AccountingAPI.Data
{
        public partial class Account : ISaveConfig
        {
                public Account()
                {
                        // Employees = new HashSet<Employee>();
                        // Guardians = new HashSet<Guardian>();
                        Ledgers = new HashSet<Ledger>();
                }

                public int Id { get; set; }
                public string Cid { get; set; }
                public int? ParentId { get; set; }
                public string ParentCid { get; set; }
                public string AccountName { get; set; }
                public bool IsMaster { get; set; }
                public bool Type { get; set; }
                public decimal OpeningAmount { get; set; }
                public bool? OpeningAmountType { get; set; }
                public int Status { get; set; }
                public string Reason { get; set; }
                public string Description { get; set; }
                public DateTime? CreateDate { get; set; }
                public DateTime? ModifiedDate { get; set; }
                public int? UserId { get; set; }


                public virtual Account Parent { get; set; }
                // public virtual Account Parent { get; set; }
                // public virtual User User { get; set; }


                // public virtual ICollection<Employee> Employees { get; set; }
                // public virtual ICollection<Guardian> Guardians { get; set; }
                public virtual ICollection<Ledger> Ledgers { get; set; }
        }
}
