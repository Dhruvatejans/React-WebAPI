import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';  
function EditRequest(props) {  
        const [assets, setasset]= useState({RequestID:'',AssetName: '', Quantity: '', EmployeeID: '', Status: ''});  
        const Url = "https://localhost:44365/api/AssetRequest/AssetRequestDetailsID?id=" + props.match.params.id;  
        
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setasset(result.data);  
          };  
        
          GetData();  
        }, []);   
        const UpdateResponse = (e) => {  
          e.preventDefault();  
          const data = {RequestID:props.match.params.id, AssetName:assets.AssetName, Quantity: assets.Quantity, EmployeeID: assets.EmployeeID, Status: assets.Status, ManagerID: assets.ManagerID };  
          
          axios.post('https://localhost:44365/api/AssetRequest/UpdateRequest', data)  
            .then((result) => {  
              props.history.push('/RequestList')  
            });  
        };  
        
        const onChange = (e) => {  
          e.persist();  
          setasset({...assets, [e.target.name]: e.target.value});  
        }  

      

        return (  
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateResponse}>  
                            <h2>Approve/Reject the asset.</h2>  
                            {/* <InputGroup className="mb-3">  
                              <Input type="text" name="AssetName" id="Name" placeholder="Name" value={assets.AssetName} onChange={ onChange }  />  
                            </InputGroup>  
                             <InputGroup className="mb-3">          
                              <Input type="text" placeholder="Qty" name="Quantity" id="Department" value={assets.Quantity} onChange={ onChange }/>  
                            </InputGroup>   */}
                             {/* <Label>Employee ID</Label>
                            <InputGroup className="mb-3">           
                  
                              <Input type="text" placeholder="EID" name="EmployeeID" id="Age"  value={assets.EmployeeID} onChange={ onChange }  />  
                            </InputGroup>  */}
                            {/* <Label>Status</Label> 
                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="Status" name="Status" id="City" value={assets.Status} onChange={ onChange }  /> 
                              */}
                              {/* <select class="custom-select"name="Status" value={assets.Status}> 
                                <option value="Approved">Approve</option> 
                                <option value="Rejected">Reject</option>    
                              </select>  */}
                              
                            {/* </InputGroup> */}
                            <div class="form-group">
                                    <label for="exampleFormControlSelect1"><b>Status</b></label>
                                    <select class="form-control" name="Status" id="Status"  value={assets.Status} onChange={ onChange }>
                                      <option></option>
                                      <option>Approved</option>
                                      <option>Rejected</option>
                         
                                    </select>
                                  </div>  
                            {/* <Label>ManagerID</Label>
                            <InputGroup className="mb-3">           
                              <Input type="text" placeholder="MID" name="ManagerID" id="Age"  value={assets.ManagerID} onChange={ onChange }  />  
                            </InputGroup> */}
                           

                             
                             
                      <CardFooter className="p-4">  
                          <Row>  
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-success mb-1"  ><span>Approve/Reject</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              {/* <Button className="btn btn-secondary mb-1" block><span>Cancel</span></Button>   */}
                            </Col>  
                          </Row>  
                        </CardFooter>  
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
                </Container>  
              </div>  
        )  
}  

export default EditRequest
