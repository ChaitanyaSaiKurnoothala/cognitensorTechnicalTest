import React, { Component } from 'react';
import '../components/login.css';
import Loginmodel from '../components/login-model';
import Responsemodel from '../components/response-model';

import { Redirect } from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:'',
            errorMessage:'',
            validationError:''
         }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleChange=(e)=>{
        if(e.target.name==="username"){
            if(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(e.target.value)){
         this.setState({
             username:e.target.value,
             validationError:""
         })
        }
        else{
      this.setState({
    validationError:"Invalid Username"
      })
        }
        }else if(e.target.name==="password"){
            this.setState({
                password:e.target.value
            })
        }

    }
    handleSubmit=(e)=>{
         e.preventDefault();
        var errorMessage='';
        let login = new Loginmodel();
        let responseModel =new Responsemodel();
        login.username=this.state.username;
        login.password=this.state.password;
        const requestBody = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        };
        fetch('http://localhost:8086/loginDetails',requestBody)
        .then(response => 
            response.json()
            )
        .then((data)=>{
           this.setState({
               errorMessage:data.error
           })
           if(this.state.errorMessage==""){
               alert("You have successfully logged in");
               <Redirect to="/success"/>
           }
        }
           );
    }
    render() { 
        return (
        <div className="details-div">
            <h2>Login Here</h2>
        <form onSubmit={this.handleSubmit}>
        <input name="username" type="text" placeholder="abc@xyz.com" onChange={this.handleChange}/>
        {this.state.validationError==''?<br/>:<div className="validationerror-class">{this.state.validationError}</div>}
        <input name="password" type="password" placeholder="Password" onChange={this.handleChange}/><br/>
        <a className="link-class" href="/forgot"><i>forgot password?</i></a><br/>
        {this.state.errorMessage==''?
      null:
       <span className="errormsg-class">
        {this.state.errorMessage}
    </span>}<br/>
        <button className="btn-class" type="submit">Login</button>
        </form>
        </div>
        );
    }
}
 
export default Login;