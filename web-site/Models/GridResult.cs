using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace web_site.Models
{
    public class GridResult<T>
    {
        public IList<T> Items { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int TotalItems { get; set; }
    }
}