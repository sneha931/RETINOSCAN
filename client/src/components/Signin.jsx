import React from 'react';
import "../styles/Signin.css";
import { Link } from 'react-router-dom';
export default function Signin() {
  return (
    <div className='container'>
       <h2>Retinoscan</h2>
       <div className='signinform'>
        <h2>Welcome to Retinoscan</h2>
        <p>The world's most advanced AI medical tool for eye health</p>
        <Link to="/Signinaccount"><button  id="sign">Sign in</button></Link>       
         <p>or</p>
        <Link to="/Signinaccount"><button id="account">Create an account</button></Link>
       </div>
    </div>
  )
}
