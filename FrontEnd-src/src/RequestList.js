import React from 'react'  

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'  
import EditRequest from './EditRequest';

function RequestList(props) {  

  const [data, setData] = useState([]);  

  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('https://localhost:44365/api/AssetRequest/AssetRequestDetails');  

      setData(result.data);  

    };  

  

    GetData();  

  }, []);  

  const deleteasset = (ID) => {  

    debugger;  

    axios.delete('https://localhost:44365/api/AssetRequest/DeleteRequest?id=' + ID)  

      .then((result) => {  

        props.history.push('/RequestList')  

      });  

  };  

  // const editasset = (AssetID) => {  

  //   debugger;  

  //   axios.put('https://localhost:44365/api/Assets/UpdateAsset?id=' + AssetID)  

  //     .then((result) => {  

  //       props.history.push('/EditAsset')  

  //     });  

  // };  

  const editasset1 = (id) => {  

    props.history.push({  

      pathname: '/EditRequest/' + id  

    });  

  };  

  

  return (  
    <Router>
      {/* <Switch>
      <Route path='/EditRequest' component={EditRequest} /> 
      </Switch> */}

    <div className="animated fadeIn">  

      <Row>  

        <Col>  

          <Card>  

            <CardHeader>  

              <i className="fa fa-align-justify"></i> Assets Request List  

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

                    data.map((item, idx) => {  

                      return <tr>  

                        <td>{item.RequestID}</td>  

                        <td>{item.AssetName}</td>  

                        <td>{item.Quantity}</td>  
                        <td>{item.EmployeeID}</td>  

                        <td>{item.Status}</td>  
                        <td>{item.ManagerID}</td>  
                        <td>  

                          <div class="btn-group">  

                            <button className="btn btn-success" onClick={() => { editasset1(item.RequestID) }}>Edit</button>  

                            <button className="btn btn-success" onClick={() => { deleteasset(item.RequestID) }}>Delete</button>  
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
    </Router> 
  )  

}  

export default RequestList

