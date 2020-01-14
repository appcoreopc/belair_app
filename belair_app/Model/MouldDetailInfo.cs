using System.Collections.Generic;

namespace belair_app.Model
{
    public class MouldDetailInfo {

        public string MouldId { get; set; }  

        public string Description { get; set; }
        
        public string Target { get; set; }

        public string PartCode { get; set; }

        public string CycleTime { get; set; }
        
        public IEnumerable<string> MouldImages {get ; set; }
    }
}