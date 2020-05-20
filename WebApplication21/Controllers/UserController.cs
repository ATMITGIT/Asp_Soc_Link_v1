using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication21.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication21.Controllers
{
	public class UserController : Controller
	{
        private ApplicationContext db;
        public UserController(ApplicationContext context)
        {
            db = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(string Name, string Email, string Password)
        {
           
                User s = new User { Name = Name, Email = Email, Password = Password };
                db.Add(s);
                db.SaveChanges();
                return RedirectPermanent("~/User/UserPage");
            

        }
        [Route("api/ajax")]
        public string getAjax(string imagelink,string username)
        {//avelacnel databaseum
            return imagelink;
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(string Email, string Password)
        {
            bool t = db.Users.Any(x => x.Email == Email && x.Password == Password);
           
                return RedirectPermanent("~/User/UserPage");
           

        }

        public IActionResult UserPage()
        {
            return View();
        }

        public IActionResult ProfileSettings()
        {
            return View();
        }
    }
}

