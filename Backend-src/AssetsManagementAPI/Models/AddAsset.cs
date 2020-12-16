using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetsManagementAPI.Models
{
    public class AddAsset
    {
        public int AssetID { get; set; }
        public string AssetName { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public int Total_Price { get; set; }
    }
}