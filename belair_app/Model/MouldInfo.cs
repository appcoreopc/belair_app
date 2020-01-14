using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace belair_app.Model
{
    public class MouldInfo {

        public string MouldId { get; set; }  

        public string PartNumber { get; set; }

        public string Description { get; set; }

        public IEnumerable<string> MouldImages {get ; set; }
    }


     public class MouldParameterSetting {

        public string MouldId { get; set; }  

        public string PartNumber { get; set; }

        public string ScrewSetting { get; set; }

        public string Description { get; set; }

     }

}