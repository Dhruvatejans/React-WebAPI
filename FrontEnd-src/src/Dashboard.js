import React, { useState, useEffect } from 'react'  
import AddRequest from './AddRequest';
import Displayprofile from './Displayprofile';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StatusDataRequest from './StatusDataRequest';
import StatusRequest from './StatusRequest';
import AddAsset from './AddAsset';
import App from './App';

function Dashboard() {  
    const [user, setuser] = useState({ ManagerName: '', Password: '' });
    
  
    useEffect(() => {  
        var a = localStorage.getItem('myData');  
        var b = JSON.parse(a);  
        console.log(b.ManagerName);  
        setuser(b)  
        console.log(user.ManagerID)  
        document.getElementById('lin').style.display="none";
        document.getElementById('lin1').style.display="none";
        document.getElementById('logout').style.display="block";
  
    }, []);  
 
    return (  
        <> 
         <Router>
         <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText" >
 <ul class="navbar-nav mr-auto">
           <li className="nav-item" >      
             <Link to={'/AddRequest/'} className="nav-link"><button className="btn btn-success"><b>Request-Asset</b></button></Link>      
           </li>
         
 <li className="nav-item">      
             <Link to={'/Displayprofile/'+user.ManagerID} className="nav-link"><button className="btn btn-success"><b>View Profile</b></button></Link>      
           </li>


           <li className="nav-item">      
             <Link to={'/StatusDataRequest/'+user.ManagerID} className="nav-link"><button className="btn btn-success"><b>Check-Request-Status</b></button></Link>      
           </li>
         

   
 </ul>
           


</div>

         </nav>
         <hr/>
         <b><h2>&nbsp;&nbsp;&nbsp;Hello, {user.ManagerName}</h2> </b> 
         <hr/>
         <br/>
  
         <Switch>
         <Route path='/Displayprofile/:id' component={Displayprofile} /> 
         <Route path='/StatusDataRequest/:id' component={StatusDataRequest} /> 
         <Route path='/StatusRequest' component={StatusRequest} /> 
         <Route path='/AddRequest' component={AddRequest} /> 
         {/* <Route path='/App' component={App} />  */}
    

         </Switch>
       
            

         </Router>
        </>  
    )  
}  
  
export default Dashboard  