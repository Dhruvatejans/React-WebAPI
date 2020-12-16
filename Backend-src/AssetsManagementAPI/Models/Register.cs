using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetsManagementAPI.Models
{
    public class Register
    {
        public int ManagerID { get; set; }
        public string ManagerName { get; set; }
        public string Password { get; set; }
        public long Mobile { get; set; }
        public string Address { get; set; }
    }
}