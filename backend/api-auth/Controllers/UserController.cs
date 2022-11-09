using api_auth.Models;
using Microsoft.AspNetCore.Mvc;

namespace api_auth.Controllers
{
    public class UserController : Controller
    {
        [HttpPost]
        private async Task<ActionResult> RegisterUser(User newUser)
        {
            try
            {
                // push 'newUser' to DB
                return StatusCode(200);
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }
    }
}
