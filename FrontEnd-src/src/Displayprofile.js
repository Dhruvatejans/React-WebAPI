import React, { useState, useEffect } from 'react'  
import axios from 'axios'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import { Badge,InputGroup,Input,Form,CardFooter,Button, Container, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
function Displayprofile (props) {  

        const [user, setuser]= useState({ManagerName: '', Password: '', Mobile: '', Address: ''});
     
        const Url = "https://localhost:44365/api/Managers/ManagerDetailsID?id=" + props.match.params.id;  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  
        
     
      
        
        const UpdateProfile = (e) => {  
          e.preventDefault();  
          const data = {ManagerID: props.match.params.id, ManagerName: user.ManagerName, Password: user.Password, Mobile: user.Mobile, Address: user.Address};  
        
          axios.post('https://localhost:44365/api/Managers/UpdateRequest', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/Login')  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  

        return (  
          
          <Router>
          {/* <Switch>
   <Route path='/EditRequest' component={EditRequest} /> 
   </Switch> */}
             <div className="app flex-row align-items-center">  
             <Container>  
               <Row className="justify-content-center">  
                 <Col md="12" lg="10" xl="8">  
                   <Card className="mx-4">  
                     <CardBody className="p-4">  
                       <Form onSubmit={UpdateProfile}>  
                         <center><h2><b>Your Profile</b></h2>  </center>

                         <img height="200" src="https://image.shutterstock.com/image-vector/male-profile-icon-260nw-197167847.jpg"/>
                         
                         {/* <InputGroup className="mb-3">  
                               <Input type="text" name="ManagerID" id="ID" placeholder="ID" value={user.ManagerID} onChange={onChange}  />  
                             </InputGroup> */}
                             <label><h3><b>Your Manager ID is : {user.ManagerID}</b></h3></label>
                             <InputGroup className="mb-3">  
                               <Input type="text" name="ManagerName" id="ManagerName" placeholder="Name" value={user.ManagerName} onChange={onChange}  />  
                             </InputGroup>  
                              <InputGroup className="mb-3">  
                               <Input type="text" placeholder="Password" name="Password" id="Password" value={user.Password} onChange={onChange} />  
                             </InputGroup>  
                             <InputGroup className="mb-3">  
                               <Input type="text" placeholder="Mobile" name="Mobile" id="Mobile"  value={user.Mobile}  onChange={onChange} />  
                             </InputGroup>   
                             <InputGroup className="mb-3">  
                               <Input type="text" placeholder="Address" name="Address" id="Email"  value={user.Address} onChange={onChange}  />  
                             </InputGroup>   
                             
                                                        
                   <CardFooter className="p-4">  
                       <Row>  
                       <Col xs="12" sm="6">  
                           <Button type="submit" className="btn btn-success mb-1" ><span>Change/Update</span></Button>  
                         </Col>  
                         <Col xs="12" sm="6">  
                           <Button className="btn btn-secondary mb-1" ><span>Cancel</span></Button>  
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
           </Router>
        )  
}  
  
export default Displayprofile  