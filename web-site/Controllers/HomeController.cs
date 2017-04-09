using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using web_site.Models;

namespace web_site.Controllers
{
    public class HomeController : Controller
    {
        static IList<User> dbUsers;

        public HomeController() {
            if (dbUsers == null)
            {
                dbUsers = this.GetUsers();
            }
        }

        public ActionResult Index()
        {
            return View();
        }

        [HttpPut]
        [ActionName("users")]
        public ActionResult UsersUpdate(User updatedUser)
        {
            var user = dbUsers.Where(u => u.Id == updatedUser.Id).FirstOrDefault();

            user.Firstname = updatedUser.Firstname;
            user.Lastname = updatedUser.Lastname;
            user.Email = updatedUser.Email;

            return new HttpStatusCodeResult(200);
        }

        [HttpPost]
        [ActionName("users")]
        public ActionResult Users(User user)
        {
            user.Id = dbUsers.Count + 1;
            dbUsers.Add(user);
            return new HttpStatusCodeResult(200);
        }

        [HttpDelete]
        [ActionName("users")]
        public ActionResult Users(int id)
        {
            var user = dbUsers.Where(u => u.Id == id).FirstOrDefault();

            if (user != null)
                dbUsers.Remove(user);

            return new HttpStatusCodeResult(200);
        }

        [HttpGet]
        [ActionName("users")]
        public ActionResult Users(int? id, int page = 1, int pageSize = 3)
        {
            IList<User> users;
            var result = new GridResult<User>();

            if (id.HasValue)
            {
                users = dbUsers.Where(u => u.Id == id.Value).ToList();
                result.TotalItems = 1;
            }
            else
            {
                users = dbUsers.ToList();
                result.TotalItems = users.Count;
                users = users.Skip((page - 1) * pageSize).Take(pageSize).ToList();
            }

            result.Page = page;
            result.PageSize = pageSize;
            result.Items = users;

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        protected IList<User> GetUsers()
        {
            return new List<User>()
            {
                new User(){ Id = 1, Firstname = "John", Lastname = "Lennon", Email="john.lennon@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 2, Firstname = "Paul", Lastname = "McCartney", Email="paul.mccartney@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 3, Firstname = "Ringo", Lastname = "Star", Email="ringo.star@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 10, Firstname = "Chris", Lastname = "Martin", Email="chris.martin@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 4, Firstname = "George", Lastname = "Harrison", Email="george.harrison@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 5, Firstname = "Kurt", Lastname = "Cobain", Email="kurt.cobain@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 6, Firstname = "Eddie", Lastname = "Veder", Email="eddie.vedder@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 7, Firstname = "Liam", Lastname = "Gallagher", Email="liam.gallagher@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 8, Firstname = "Noel", Lastname = "Gallagher", Email="noel.gallgher@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 9, Firstname = "Michael", Lastname = "Jackson", Email="michael.jackson@example.com", Birthdate = new DateTime(1944, 11, 11) },
                new User(){ Id = 11, Firstname = "Chris", Lastname = "Cornel", Email="cris.cornel@example.com", Birthdate = new DateTime(1944, 11, 11) }
            };
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}