import React, { useState } from 'react'   
import axios from 'axios';  
import {useForm} from 'react-hook-form';
function Login1(props) {  
    const [Managers, setmanagers] = useState({ ManagerName: '', Password: ''});  
    const apiUrl = "https://localhost:44365/api/Managers/Login";    
    const Login = (e) => {    
           
            debugger;   
            const data = { ManagerName:Managers.ManagerName, Password: Managers.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
                var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);  
                if(data.ManagerName==="admin" && data.Password==="admin")
                {
                  props.history.push('/DisplayList1')
                }
                else if(result.data.status == '200')    
                {
                  alert('Welcome  '+data.ManagerName);  
                  props.history.push('/Dashboard')  
                } 
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setmanagers({...Managers, [e.target.name]: e.target.value});    
              }    
              const { register, handleSubmit, errors}= useForm();
    return (  
        
        <div class="container" style={{alignContent:"center" }}>  
        <div class="row justify-content-center">  
          {/* <div class="col-xl-10 col-lg-12 col-md-9">   */}
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body">  
                <div class="row">  
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>  
                  {/* <div class="col-lg-6">   */}
                    <div class="p-5">  
                      <div class="text-center">  
                      
                        <h1 class="h4 text-gray-900 mb-4"><b >Login</b></h1>  
                      </div>  
                      <form onSubmit={handleSubmit(Login)} class="user">  
                        <div class="form-group">  
                          <input type="text" class="form-control" value={Managers.ManagerName} onChange={ onChange }  name="ManagerName" id="ManagerName1" aria-describedby="emailHelp" placeholder="Enter username"
                          ref={register({required:true})}/>  
                          <div style={{color:"red"}}>
                             {errors.ManagerName && errors.ManagerName.type==="required" && ( <p>Enter username.</p>)}
  
                        </div>
                        </div>  
                        <div class="form-group">  
                          <input type="password" class="form-control" value={Managers.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Password"
                           ref={register({required:true})}/> 
                           <div style={{color:"red"}}>
                             {errors.Password && errors.Password.type==="required" && ( <p>Enter Password.</p>)}
  
                        </div> 
                        </div>  
                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button type="submit" className="btn btn-success mb-1" block><span>Login</span></button>    
                     
                        
                      </form>  
                      <hr/>  
                    {/* </div>   */}
                  </div>  
                </div>  
              </div>  
            </div>  
           {/* </div>   */}
          </div>  
        </div>  
    )  
}  
  
export default Login1  