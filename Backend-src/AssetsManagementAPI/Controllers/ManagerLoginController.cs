using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AssetsManagementAPI.Models;
using System.Data.Entity;

namespace AssetsManagementAPI.Controllers
{
    [RoutePrefix("api/Managers")]
    public class ManagerLoginController : ApiController
    {
        AssetsDBEntities DB = new AssetsDBEntities();
        [Route("Login")]
        [HttpPost]
        public IHttpActionResult Get(Login login)
        {
            var log = DB.Managers.Where(x => x.ManagerName.Equals(login.ManagerName) && x.Password.Equals(login.Password)).FirstOrDefault();
            //var log1=DB.Managers;
            /*if(login.ManagerName.Equals("admin") && login.Password.Equals("admin"))
            {
                return Ok(new { status = 200, isSuccess = true, message = "Admin Login successfull", UserDetails = log });
            }*/
            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "Login successfull", UserDetails = log });
        }

        [Route("InsertManager")]
        [HttpPost]
        public object InsertManagers(Register Reg)
        {
            try
            {
                //AssetsDBEntities DB=new AssetsDBEntities();
                
                Manager ML = new Manager();
                if (ML.ManagerID == 0)
                {
                    ML.ManagerName = Reg.ManagerName;
                    ML.Password = Reg.Password;
                    ML.Mobile = Reg.Mobile;
                    ML.Address = Reg.Address;
                    DB.Managers.Add(ML);
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

        [Route("ManagerDetailsID")]
        [HttpGet]
        public object ManagerDetails1(int id)
        {
            var obj = DB.Managers.Where(x => x.ManagerID == id).ToList().FirstOrDefault();
            return obj;
        }

        [Route("UpdateRequest")]
        [HttpPost]
        public object UpdateRequest(Register AA)
        {
            try
            {

                Manager RA = new Manager();
                var obj = DB.Managers.Where(z => z.ManagerID == AA.ManagerID).ToList().FirstOrDefault();
                //int x;
                if (obj.ManagerID > 0)
                {
                    obj.ManagerName = AA.ManagerName;
                    obj.Password = AA.Password;
                    obj.Mobile = AA.Mobile;

                    obj.Address = AA.Address;
            
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

    }
}
