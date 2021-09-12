using System;

namespace AccountingAPI.Data
{
        public interface ISaveConfig
        {

                public DateTime? CreateDate { get; set; }
                public static DateTime? ModifiedDate { get; set; }

        }
}