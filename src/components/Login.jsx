import React, { useState } from 'react';
import './Login.css';
import user_icon from './Assets/person.png'
import password_icon from './Assets/password.png'
import email_icon from './Assets/email.png'
import { Link } from 'react-router-dom';
  const Login = () => {

    const [action,setAction]=useState("Sign up");


    const handlelogin=()=>{
      setAction("Sign up");
    }

    const handlesignup=()=>{
      setAction("Login");
      
    }
    return (
      <div className="imageclass">
      <div className="container" >
    <div className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
      {action==="Login"?<div></div>: <div className="input">
        <img src={user_icon} alt=""/>
        <input type="text" placeholder='Name'></input>
      </div>}
     
      <div className="input">
        <img src={email_icon} alt=""/>
        <input type="email" placeholder='Email ID'/>
      </div>
      <div className="input">
        <img src={password_icon} alt=""/>
        <input type="password" placeholder='Enter Password'/>
      </div>
    </div>
   {action==="Login"?<div></div>: <div className="forgot-password">Forgot Password?<Link>Click Here</Link></div>}
    <div className="submit-container">
      <div className={action==="Login"?"submit gray":"submit"} onClick={handlelogin} >Sign Up</div>
      <div className={action==="Sign up"?"submit gray":"submit"} onClick={handlesignup}>Login</div>
    </div>
  </div>
  </div>
    )
  }
  
  export default Login;