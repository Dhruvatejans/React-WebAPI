import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';

function AddAsset(props) { 
  const { register, handleSubmit, errors}= useForm(); 
  const [data, setdata] = useState({ AssetName: '', Quantity: '', Price: '', Total_Price: ''})  
  const apiUrl = "https://localhost:44365/api/Assets/InsertAsset";  
  const Registration = (e) => {  
  
    debugger;  
    const data1 = { AssetName: data.AssetName, Quantity: data.Quantity, Price: data.Price, Total_Price: data.Total_Price };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')
        {
            alert('Invalid asset');
        }
        else  
        {
            alert('Valid asset added');
            props.history.push('/Dashboard') 
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
                  <h3 class="h4 text-gray-900 mb-4"><b>Add a new Asset</b></h3>  
                </div>  
                <form onSubmit={handleSubmit(Registration)} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="AssetName" onChange={onChange} value={data.AssetName} class="form-control" id="exampleFirstName" placeholder=" Asset Name" 
                      ref={register({required:true })}/>  
                      <div style={{color:"red"}}>
                        
                      {errors.AssetName && errors.AssetName.type==="required" && ( <p>Enter asset name.</p>)}
                      {/* {errors.AssetName && errors.AssetName.type==="pattern" && ( <p>Enter characters only.</p>)}
                      , pattern:/^[a-zA-Z]+$/i */}
                      </div>
                    </div>  
                    <div class="col-sm-6">  
                      <input type="text" name="Quantity" onChange={onChange} value={data.Quantity} class="form-control" id="exampleLastName" placeholder="Quantity" 
                      ref={register({required:true,pattern:/^[0-9]*$/ ,maxLength: 10})}/>  
                      <div style={{color:"red"}}>
                       {errors.Quantity && errors.Quantity.type==="required" && ( <p>Enter quantity.</p>)}
     
                      {errors.Quantity && errors.Quantity.type==="maxLength" && ( <p>Enter less quantity.</p>)}
                      {errors.Quantity && errors.Quantity.type==="pattern" && ( <p>Enter numbers only.</p>)}
                       </div>
                    </div>  
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Price" onChange={onChange} value={data.Price} class="form-control" placeholder="Price" 
                    ref={register({required:true, maxLength: 10, pattern:/^[0-9]*$/})}/>  
                    <div style={{color:"red"}}>
                       {errors.Price && errors.Price.type==="required" && ( <p>Enter price.</p>)}
     
                      {errors.Price && errors.Price.type==="maxLength" && ( <p>Enter less price.</p>)}
                      {errors.Price && errors.Price.type==="pattern" && ( <p>Enter numbers only.</p>)}
                       </div>
                  </div>  
                  {/* <div class="form-group">  
                    <input type="text" name="Total_Price" onChange={onChange} value={data.Total_Price} class="form-control"  placeholder="Total" disabled />  
                  </div>   */}
                  <div class="form-group row">  
                   
                  </div>  
                  <button type="submit" class="btn btn-success">  
                    Add  
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
  
export default AddAsset  

