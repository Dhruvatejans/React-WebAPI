import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardHeader,Table,CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function StatusDataRequest(props) {  
  //const [data, setuser] = useState([]);  
  let clr;
        const [user, setuser]= useState([]);
        //console.log(props.match.params.id);  
        const Url = "https://localhost:44365/api/AssetRequest/AssetRequestDetailsIDGet?id=" + props.match.params.id;  
        useEffect(() => {  
        
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  

        const editasset = (id) => {  

          props.history.push({  
      
            pathname: '/EditAsset/' + id  
      
          });  
      
        };

        const deleteasset = (id) => {  

          debugger;  
      
          axios.delete('https://localhost:44365/api/Assets/DeleteAsset?id=' + id)  
      
            .then((result) => {  
      
              props.history.push('/AssetsList')  
      
            });  
      
        }; 


        const UpdateAsset = (e) => {  
          e.preventDefault();  
          const data = {RequestID:user.RequestID, AssetName:user.AssetName, Quantity: user.Quantity, EmployeeID: user.EmployeeID, Status: user.Status, ManagerID: user.ManagerID};  
         console.log(data);
          axios.post('https://localhost:44365/api/AssetRequest/UpdateRequest', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/StatusRequest')  
            }) 
        }    
        const onChange = (e) => {  
     
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  

        return (  
          
          <div className="animated fadeIn">  

          <Row>  
    
            <Col>  
    
              <Card>  
    
                <CardHeader>  
    
                  <i className="fa fa-align-justify"></i> <b>Status of Requested Assets</b>
                  </CardHeader>  
    
                <CardBody>  
    
                  <Table hover bordered striped responsive size="sm">  
    
                    <thead>  
    
                      <tr>  
    
                        <th>RequestID</th>  
    
                        <th>AssetName</th>  
    
                        <th>Quantity</th>  
    
                        <th>EmployeeID</th>  
    
                        <th>Status</th>  

                        <th>ManagerID</th>  
    
                      
    
                      </tr>  
    
                    </thead>  
    
                    <tbody>  
    
                      {  
                        
                        user.map((item, idx) => {  
                          if(item.Status=="Approved"){
                            clr="green"
                          }
                          else if(item.Status=="Rejected"){
                            clr="red"
                          }
                          else{
                            clr="orange"
                          }
                        
                          return <tr style={{color:clr}}>  
    
                            <td>{item.RequestID}</td>  
    
                            <td>{item.AssetName}</td>  
    
                            <td>{item.Quantity}</td>  
                            <td>{item.EmployeeID}</td>  
                       
                            <td>{item.Status}</td>  
    
                            <td>{item.ManagerID}</td>  
                            
    
                            <td>  
    
                              <div class="btn-group">  
    
                                {/* <button className="btn btn-success" onClick={() => { editasset(item.RequestID) }}>Edit</button>  
    
                                <button className="btn btn-success" onClick={() => { deleteasset(item.RequestID) }}>Delete</button>   */}
                              </div>  
                            </td>  
                          </tr>  
                        })}  
                    </tbody>  
                  </Table>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </div>  
        )  
}  
  
export default StatusDataRequest  