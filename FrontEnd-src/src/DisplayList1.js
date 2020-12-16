import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddAsset from './AddAsset';
import AddRequest from './AddRequest';
import AssetsList from './AssetsList';
import DisplayList from './DisplayList'
import DisplayList2 from './DisplayList2'
import DisplayList3 from './DisplayList3';
import EditAsset from './EditAsset';
import EditRequest from './EditRequest';
import Home from './Home';



export default class DisplayList1 extends Component {
  componentDidMount(){
    document.getElementById('lin').style.display="none";
    document.getElementById('lin1').style.display="none";
    document.getElementById('logout').style.display="block";


 }
  render(){
    return (
      
        <div>
            <Router>
              <hr/><b><h2><center>Welcome Admin!</center></h2></b>
              <hr/>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    <li className="nav-item">      
                <Link to={'/AssetsList'} className="nav-link"><button className="btn btn-secondary"><b>Assets Available</b></button></Link>      
              </li>
              <li className="nav-item">      
                <Link to={'/DisplayList'} className="nav-link"><button className="btn btn-success"><b>Approved Requests</b></button></Link>      
              </li>
              <li className="nav-item">      
                <Link to={'/DisplayList2'} className="nav-link"><button className="btn btn-danger"><b>Rejected Requests</b></button></Link>      
              </li>
              <li className="nav-item">      
                <Link to={'/DisplayList3'} className="nav-link"><button className="btn btn-success"><b>  Pending Requests</b></button></Link>      
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">      
                <Link to={'/AddAsset'} className="nav-link"><button className="btn btn-success"><b>Add-New-Asset</b></button></Link>      
              </li>

    </ul>
    <hr/>
    <br/>

            
   
  </div>
  
            </nav>
            <Switch>
         
            <Route path='/DisplayList' component={DisplayList} />  
            {/* <Route path='/DisplayList1' component={DisplayList1} />  */}
            <Route path='/DisplayList2' component={DisplayList2} /> 
            <Route path='/DisplayList3' component={DisplayList3} /> 
            <Route path='/EditAsset/:id' component={EditAsset} /> 
            <Route path='/EditRequest/:id' component={EditRequest} /> 
            <Route path='/Home' component={Home} /> 
            <Route path='/AddAsset' component={AddAsset} /> 
            <Route path='/' component={AssetsList}/>
            </Switch>
            </Router>
        </div>
    )
}
}
