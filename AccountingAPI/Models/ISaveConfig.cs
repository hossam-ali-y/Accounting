using System;

namespace AccountingAPI.Data
{
        public interface ISaveConfig
        {

                public DateTime? CreateDate { get; set; }
                public  DateTime? ModifiedDate { get; set; }

        }
}