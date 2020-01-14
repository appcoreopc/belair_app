using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using belair_app.Model;

namespace belair_app.Controllers
{
    [Route("api/[controller]")]
    public class MouldDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<MouldInfo> GetMouldInfo()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new MouldInfo
            {
                MouldId = DateTime.Now.AddDays(index).ToString("d"),
                Description  = rng.Next(-20, 55).ToString()                
            });
        }

        [HttpGet("[action]")]
        public IEnumerable<MouldDetailInfo> GetMouldDetail()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new MouldDetailInfo
            {
                MouldId = DateTime.Now.AddDays(index).ToString("d"),
                Description  = rng.Next(-20, 55).ToString()                
            });
        }
        
        [HttpGet("[action]")]
        public IEnumerable<MouldParameterSetting> GetParameterSettins(string Id)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new MouldParameterSetting
            {
                MouldId = DateTime.Now.AddDays(index).ToString("d"),
                Description  = rng.Next(-20, 55).ToString()                
            });
        }

        [HttpPost("[action]")]
        public bool UpdateParameterSettins(string Id)
        {
            return true;
        }

    }
}
