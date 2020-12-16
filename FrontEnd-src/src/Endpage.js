import React, { Component } from 'react'

export default class Endpage extends Component {
componentDidMount(){
    document.getElementById('lin').style.display="block";
        document.getElementById('lin1').style.display="block";
        document.getElementById('logout').style.display="none";
}

    render(){
    return (
        <div>
            <hr/>
            <img src="http://www.smartprintgroup.com/assets/images/bye.png"/>
            
            <h2><center><b>Successfully Logged out!</b></center></h2>
            <hr/>
            <hr/>

        </div>
    )
    }
}
