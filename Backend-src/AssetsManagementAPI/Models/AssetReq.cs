using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetsManagementAPI.Models
{
    public class AssetReq
    {
        public int RequestID { get; set; }
        public string AssetName { get; set; }
        public string Quantity { get; set; }
        public int EmployeeID { get; set; }
        public string Status { get; set; }
        public int ManagerID { get; set; }
    }
}