import React, { useState ,useEffect} from 'react'  
import axios from 'axios';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

function AddRequest(props) {  
  const { register, handleSubmit, errors}= useForm(); 
  const [data, setdata] = useState({ AssetName: '', Quantity: '', EmployeeID: '', Status: '',ManagerID: ''})  
  const apiUrl = "https://localhost:44365/api/AssetRequest/InsertRequest";  
  const Registration1 = (e) => {  
    
    debugger;  
    const data1 = { AssetName: data.AssetName, Quantity: data.Quantity, EmployeeID: data.EmployeeID, Status: data.Status, ManagerID: data.ManagerID };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid Request');  
        else  
        {
            alert('AssetRequested.')
            props.history.push('/Login')  
        }
          
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div class="container">  
      <div class="row">  
        {/* <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
          Add New Contact  
       </div>   */}
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4"><b>Request for an asset</b></h1>  
                 <div style={{color:"red"}}>
                 <span><p>Once Requested, you cannot cancel/update your request.<br/>
                           You can only view the staus of the asset that you have requested.</p></span>
                 </div>
                </div>  
                <form onSubmit={handleSubmit(Registration1)} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="AssetName" onChange={onChange} value={data.AssetName} class="form-control" id="exampleFirstName" placeholder="Asset" 
                      ref={register({required:true })}/>  
                      <div style={{color:"red"}}>
                        {errors.AssetName && errors.AssetName.type==="required" && ( <p>Enter asset name.</p>)}
                        {/* {errors.AssetName && errors.AssetName.type==="pattern" && ( <p>Enter characters only.</p>)}
                        , pattern:/^[a-zA-Z]+$/i */}
                        </div>
                    </div>  
                    <div class="col-sm-6">  
                      <input type="text" name="Quantity" onChange={onChange} value={data.Quantity} class="form-control"  placeholder="Qty" 
                      ref={register({required:true,pattern:/^[0-9]*$/ ,maxLength: 10})}/>  
                      <div style={{color:"red"}}>
                       {errors.Quantity && errors.Quantity.type==="required" && ( <p>Enter quantity.</p>)}
                      {errors.Quantity && errors.Quantity.type==="maxLength" && ( <p>Enter less quantity.</p>)}
                      {errors.Quantity && errors.Quantity.type==="pattern" && ( <p>Enter numbers only.</p>)}
                       </div>

                    </div>  
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="EmployeeID" onChange={onChange} value={data.EmployeeID} class="form-control"  placeholder="Employee ID" 
                    ref={register({required:true,pattern:/^[0-9]*$/ ,maxLength: 10})}/>  
                    <div style={{color:"red"}}>
                       {errors.EmployeeID && errors.EmployeeID.type==="required" && ( <p>Enter EID.</p>)}
                      {errors.EmployeeID && errors.EmployeeID.type==="maxLength" && ( <p>Enter valid ID.</p>)}
                      {errors.EmployeeID && errors.EmployeeID.type==="pattern" && ( <p>Enter numbers only.</p>)}
                       </div>
                  </div>  
                  {/* <div>
                    <p>Your Manager ID : {data.ManagerID}</p>
                  </div> */}
                  <div class="form-group">  
                    <input type="text" name="ManagerID" onChange={onChange} value={data.ManagerID} class="form-control"  placeholder="Manager ID" 
                    ref={register({required:true,pattern:/^[0-9]*$/ ,maxLength: 10})}/>  
                    <div style={{color:"red"}}>
                       {errors.ManagerID && errors.ManagerID.type==="required" && ( <p>Enter MID.</p>)}
                      {errors.ManagerID && errors.ManagerID.type==="maxLength" && ( <p>Enter valid ID.</p>)}
                      {errors.ManagerID && errors.ManagerID.type==="pattern" && ( <p>Enter numbers only.</p>)}
                       </div>
                  </div>
                  {/* <div class="form-group">  
                    <input type="text" name="Status" onChange={onChange} value={data.Status} class="form-control" id="exampleInputEmail" placeholder="Status" />  
                  </div>   */}
                  <div class="form-group row">  
                    {/* <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Address" onChange={onChange} value={data.Address} class="form-control" id="exampleInputPassword" placeholder="Address" />  
                    </div>   */}
                    {/* <div class="col-sm-6">  
                      <input type="text" name="Department" onChange={onChange} value={data.Department} class="form-control" id="exampleRepeatPassword" placeholder="Department" />  
                    </div>   */}
                  </div>  
                  <button type="submit" class="btn btn-success ">  
                   Request
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
  
export default AddRequest  