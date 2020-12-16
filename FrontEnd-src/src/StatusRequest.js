import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Input,CardFooter,Button,InputGroup,Container,Form } from 'reactstrap'; 
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function StatusRequest(props) {  
  const [data, setdata] = useState([]);  

  const editasset = (id) => {  
    console.log(id);
    props.history.push({  
      pathname: '/StatusDataRequest/'+ id  
    });  
  };  

  const onChange = (e) => {  
        e.persist();  
        debugger;  
        setdata({ ...data, [e.target.name]: e.target.value });  
      }       
    
      return (  
          <>
          <div style={{alignContent:"center", }}>  
                <label><b> RequestID </b></label>
                <input type="number" name="RequestID" value={data.RequestID} class="form-control" id="RequestID" onChange={onChange} placeholder="RequestID" />   
           </div>  
           <br/>
            <div>
            <button type="submit" class="btn btn-success mb-1" onClick={() => { editasset(data.RequestID) }} > Get</button>  
            </div>
          </>

      )
}


export default StatusRequest;