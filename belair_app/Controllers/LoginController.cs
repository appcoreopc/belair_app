using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace belair_app.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public async Task<bool> LoginUser()
        {
            await Task.Delay(2000);
            return await Task.FromResult<bool>(true);            
        }

        [HttpGet("[action]")]
        public async Task<bool> LoginTechnician()
        {
            await Task.Delay(2000);
            return await Task.FromResult<bool>(true);
        }     
    }
}
