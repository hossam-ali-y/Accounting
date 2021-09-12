using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Diagnostics;

#nullable disable

namespace AccountingAPI.Data
{
        public partial class Ledger:ISaveConfig
        {
                public Ledger()
                {
                        // CreateDate = ((DateTime)CreateDate);
                        // Attachments = new HashSet<Attachment>();
                        // StudentFees = new HashSet<StudentFee>();
                }

                public int Id { get; set; }
                public int AccountId { get; set; }
                public string AccountCid { get; set; }
                public decimal Amount { get; set; }
                public bool Type { get; set; }
                public string Description { get; set; }
                public DateTime? CreateDate { get; set; }
                public int YearId { get; set; }
                public int? UserId { get; set; }

                public virtual Account Account { get; set; }
                // public virtual User User { get; set; }
                // public virtual Year Year { get; set; }
                // public virtual ICollection<Attachment> Attachments { get; set; }
                // public virtual ICollection<StudentFee> StudentFees { get; set; }
                public DateTime? ModifiedDate { get; set; }
        }
}
