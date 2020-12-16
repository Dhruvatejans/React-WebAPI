import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function EditAsset(props) {  
        const [assets, setasset]= useState({AssetID:'',AssetName: '', Quantity: '', Price: '', Total_Price: ''});  
        const Url = "https://localhost:44365/api/Assets/AssetDetailsID?id=" + props.match.params.id;  
        
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setasset(result.data);  
          };  
        
          GetData();  
        }, []);   
        const UpdateAsset = (e) => {  
          e.preventDefault();  
          const data = {AssetID:props.match.params.id, AssetName:assets.AssetName, Quantity: assets.Quantity, Price: assets.Price, Total_Price: assets.Total_Price };  
          
          axios.post('https://localhost:44365/api/Assets/UpdateAsset', data)  
            .then((result) => {  
              props.history.push('/AssetsList')  
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
                          <Form onSubmit={UpdateAsset}>  
                            <h1>Update Asset</h1>  
                            <InputGroup className="mb-3">  
                              <Input type="text" name="AssetName" id="Name" placeholder="Name" value={assets.AssetName} onChange={ onChange }  />  
                            </InputGroup>  
                             <InputGroup className="mb-3">          
                              <Input type="text" placeholder="Qty" name="Quantity" id="Department" value={assets.Quantity} onChange={ onChange }/>  
                            </InputGroup>  
                            <InputGroup className="mb-3">           
                              <Input type="text" placeholder="Price" name="Price" id="Age"  value={assets.Price} onChange={ onChange }  />  
                            </InputGroup>  
                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="Total" name="Total_Price" id="City" value={assets.Total_Price} onChange={ onChange }  />  
                            </InputGroup>  

                             
                             
                      <CardFooter className="p-4">  
                          <Row>  
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-success mb-1" ><span>Update</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-secondary mb-1" block><span>Cancel</span></Button>  
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

export default EditAsset


// onClick={()=>{deleteasset(assets.AssetID)}}