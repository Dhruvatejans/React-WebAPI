using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using AssetsManagementAPI.Models;

namespace AssetsManagementAPI.Controllers
{
    [RoutePrefix("api/AssetRequest")]
    public class ManagerRequestController : ApiController
    {
        AssetsDBEntities DB = new AssetsDBEntities();
        [Route("InsertRequest")]
        [HttpPost]
        public object InsertManagers(AssetReq Req)
        {
            try
            {
                //AssetsDBEntities DB=new AssetsDBEntities();

                Request_Assets R = new Request_Assets();
                if (R.RequestID == 0)
                {
                    R.AssetName = Req.AssetName;
                    R.Quantity = Req.Quantity;
                    R.EmployeeID = Req.EmployeeID;
                    R.Status = "Requested/Pending";
                    R.ManagerID = Req.ManagerID;
                
                    DB.Request_Assets.Add(R);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Record SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }

        [Route("UpdateRequest")]
        [HttpPost]
        public object UpdateRequest(AssetReq AA)
        {
            try
            {
            
                Request_Assets RA = new Request_Assets();
                var obj = DB.Request_Assets.Where(z => z.RequestID == AA.RequestID).ToList().FirstOrDefault();
               
                if (obj.RequestID > 0)
                {
                    
                    obj.Status = AA.Status;
                   
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Asset SuccessFully Updated." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }

        [Route("AssetRequestDetails")]
        [HttpGet]
        public object AssetsRequestDetails1()
        {

            var a = DB.Request_Assets.ToList();
            return a;
        }

        [Route("AssetRequestDetailsID")]
        [HttpGet]
        public object AssetsRequestDetails2(int id)
        {
            var obj = DB.Request_Assets.Where(x => x.RequestID == id).ToList();
            return obj;
        }

        [HttpDelete]
        [Route("DeleteRequest")]
        public object DeleteAsset(int id)

        {

            var obj = DB.Request_Assets.Where(x => x.RequestID == id).ToList().FirstOrDefault();

            DB.Request_Assets.Remove(obj);

            DB.SaveChanges();

            return new Response
            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };

        }

        [Route("AssetRequestDetailsIDGet")]
        [HttpGet]
        public object AssetsRequestDetails(int id)
        {
            var obj = DB.Request_Assets.Where(x => x.ManagerID == id).ToList();
            return obj;
        }
    }
}
