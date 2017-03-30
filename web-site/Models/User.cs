using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace web_site.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public DateTime Birthdate { get; set; }
        public string Email { get; set; }
    }
}