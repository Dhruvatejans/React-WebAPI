import React from 'react'  

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  

function AssetsList(props) {  

  const [data, setData] = useState([]);  

  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('https://localhost:44365/api/Assets/AssetDetails');  

      setData(result.data);  

    };  

  

    GetData();  

  }, []);  

  const deleteasset = (id) => {  

    debugger;  

    axios.delete('https://localhost:44365/api/Assets/DeleteAsset?id=' + id)  

      .then((result) => {  

        props.history.push('/AssetsList')  

      });  

  };  



  const editasset = (id) => {  

    props.history.push({  

      pathname: '/EditAsset/' + id  

    });  

  };  

  

  return (  

    <div className="animated fadeIn">  
    

      <Row>  

        <Col>  

          <Card>  

            <CardHeader>  

              <i className="fa fa-align-justify"></i><b>Assets List  </b> 

              </CardHeader>  

            <CardBody>  

              <Table hover bordered striped responsive size="sm">  

                <thead>  

                  <tr>  

                    <th>AssetID</th>  

                    <th>AssetName</th>  

                    <th>Quantity</th>  

                    <th>Price</th>  

                    <th>Total_Price</th>  

                  

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                        <td>{item.AssetID}</td>  

                        <td>{item.AssetName}</td>  

                        <td>{item.Quantity}</td>  

                        <td>₹ {item.Price}</td>  

                        <td>{item.Total_Price}</td>  

                        

                        <td>  

                          <div class="btn-group">  
                          {/* <span class="glyphicon glyphicon-pencil"></span> */}
                            <button className="btn btn-success " onClick={() => { editasset(item.AssetID) }}>Edit</button>  

                            <button className="btn btn-secondary" onClick={() => { deleteasset(item.AssetID) }}>Delete</button>  
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

export default AssetsList