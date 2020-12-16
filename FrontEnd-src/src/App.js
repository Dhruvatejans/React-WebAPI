import logo from './logo.svg';
import './App.css';
import React from 'react';  
import Login1 from "./Login1";  
import Register from "./Register"; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from "./Dashboard";  
import AddAsset from './AddAsset';
import UpdateAsset from './UpdateAsset';
import AssetsList from './AssetsList';
import EditAsset from './EditAsset';
import AddRequest from './AddRequest';
import RequestList from './RequestList';
import Home from './Home';
import EditRequest from './EditRequest';
import DisplayList from './DisplayList';
import DisplayList1 from './DisplayList1';
import DisplayList2 from './DisplayList2';
import Displayprofile from './Displayprofile';
import About from './About';

import Endpage from './Endpage';


function App() {
  
  return (
    <Router>


      <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <a class="navbar-brand" href="#"><h4><b><img width="90"  height="40" src="https://mma.prnewswire.com/media/837499/AMS_Logo.jpg?p=facebook"/></b></h4></a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to={'/'} className="nav-link"><h5><b>Home</b></h5></Link> 
      </li>
      <li class="nav-item ">
      <Link to={'/About'} className="nav-link"><h5><b>About</b></h5></Link> 
      </li>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <li className="nav-item" >
        <Link to={'/login'} className="nav-link" style={{display:"block"}} id="lin"><button className="btn btn-dark"><b>Login</b></button></Link>      
      </li>
      <li className="nav-item">      
        <Link to={'/Register'} className="nav-link" style={{display:"block"}} id="lin1"><button className="btn btn-dark"><b>Register</b></button></Link>      
      </li> 

      <li class="nav-item">
        <Link to={'/Endpage'} class="nav-link" style={{display:"none"}} id="logout"><button className="btn btn-dark"><b>Logout</b></button></Link>
      </li>
      
    </ul>
  </div>
</nav>      


        <br />      

        
        <Switch>        
      
          <Route path='/login' component={Login1} />     
          <Route path='/Register' component={Register} />    
          <Route path='/Dashboard' component={Dashboard} />  
          {/* <Route path='/AddAsset' component={AddAsset} />   */}
          {/* <Route path='/UpdateAsset' component={UpdateAsset} />  */}
          <Route path='/AssetsList' component={AssetsList} /> 
          <Route path='/EditAsset/:id' component={EditAsset} /> 
          {/* <Route path='/AddRequest' component={AddRequest} />  */}
          <Route path='/RequestList' component={RequestList} /> 
          {/* <Route path='/EditRequest/:id' component={EditRequest} />  */}
          {/* <Route path='/DisplayList' component={DisplayList} />  */}
          <Route path='/DisplayList1' component={DisplayList1} /> 
          {/* <Route path='/DisplayList2' component={DisplayList2} />  */}
          <Route path='/Displayprofile' component={Displayprofile} /> 
          <Route path='/About' component={About} /> 
          <Route path='/Endpage' component={Endpage} /> 
       
          {/* <Route path='/App' component={App} />      */}
          <Route path='/' component={Home} /> 
        </Switch>      
    
    </Router>
  );
}

export default App;
