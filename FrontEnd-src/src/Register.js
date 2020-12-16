import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';
function Register(props) {  
  const [data, setdata] = useState({ ManagerName: '', Password: '', Mobile: '', Address: ''})  
  const apiUrl = "https://localhost:44365/api/Managers/InsertManager";  
  const Registration = (e) => {  
   

    debugger;  
    const data1 = { ManagerName: data.ManagerName, Password: data.Password, Mobile: data.Mobile, Address: data.Address };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
        {
          alert('Registered as manager!')
          props.history.push('/Login')  
        }
          
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
const { register, handleSubmit, errors}= useForm();

 
  return (  
    <div class="container">  
      <div class="row">  
        {/* <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
          ADD  
       </div>   */}
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4"><b>Register as Manager </b></h1>  
                </div>  
                <form onSubmit={handleSubmit(Registration)} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="ManagerName" onChange={onChange} value={data.ManagerName} class="form-control" id="exampleFirstName" placeholder="Name"   
                      ref={register({required:true,pattern:/^[a-zA-Z]+$/i ,maxLength: 20,minLength: 4})}/>
                      <div style={{color:"red"}}>
                      {errors.ManagerName && errors.ManagerName.type==="required" && ( <p>Username is mandatory.</p>)}
                      {errors.ManagerName && errors.ManagerName.type==="minLength" && ( <p>Enter upto 4 to 20 characters.</p>)}
                      {errors.ManagerName && errors.ManagerName.type==="maxLength" && ( <p>Enter upto 4 to 20 characters.</p>)}
                      {errors.ManagerName && errors.ManagerName.type==="pattern" && ( <p>Enter characters only.</p>)}
                      </div>
                     
                    </div>  
                    <div class="col-sm-6">  
                      <input type="Password" name="Password" onChange={onChange} value={data.Password} class="form-control" id="exampleLastName" placeholder="Password" 
                       ref={register({required:true, maxLength: 20,minLength: 8})}/>  
                       <div style={{color:"red"}}>
                       {errors.Password && errors.Password.type==="required" && ( <p>Password is mandatory.</p>)}
                      {errors.Password && errors.Password.type==="minLength" && ( <p>Enter minimum of 8 characters</p>)}
                      {errors.Password && errors.Password.type==="maxLength" && ( <p>Enter maximum of 20 characters.</p>)}
                       </div>
                    </div>  
                   
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Mobile" onChange={onChange} value={data.Mobile} class="form-control"  placeholder="Mobile" 
                    ref={register({required:true,pattern:/^[789]\d{9}$/i ,maxLength: 10,minLength: 10})}/>  
                    <div style={{color:"red"}}>
                       {errors.Mobile && errors.Mobile.type==="required" && ( <p>Enter your mobile number.</p>)}
                      {errors.Mobile && errors.Mobile.type==="minLength" && ( <p>Enter a valid number.</p>)}
                      {errors.Mobile && errors.Mobile.type==="maxLength" && ( <p>Enter a valid number.</p>)}
                      {errors.Mobile && errors.Mobile.type==="pattern" && ( <p>Enter a valid number..</p>)}
                       </div>
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Address" onChange={onChange} value={data.Address} class="form-control"  placeholder="Address" 
                    ref={register({required:true})}/>  
                    <div style={{color:"red"}}>
                    {errors.Address && errors.Address.type==="required" && ( <p>Please provide your address.</p>)}
                    </div>
                     
                  </div>  
                  <div class="form-group row">  
                    {/* <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Address" onChange={onChange} value={data.Address} class="form-control" id="exampleInputPassword" placeholder="Address" />  
                    </div>   */}
                    {/* <div class="col-sm-6">  
                      <input type="text" name="Department" onChange={onChange} value={data.Department} class="form-control" id="exampleRepeatPassword" placeholder="Department" />  
                    </div>   */}
                  </div>  
                  <button type="submit" class="btn btn-success  btn-block text-center">  
                    Register  
                </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Register  