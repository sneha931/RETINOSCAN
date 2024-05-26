import React from 'react';
import "../styles/Signin.css";
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();

  const signInAccount = () => {
    navigate('/signinaccount');
  };

  const create = () => {
    navigate('/createacc'); 
  };

  return (
    <div className='container'>
      <h2>Retinoscan</h2>
      <div className='signinform'>
        <h2>Welcome to Retinoscan</h2>
        <p>The world's most advanced AI medical tool for eye health</p>
        <button id="sign" onClick={signInAccount}>Sign in</button> 
        <p>or</p>
        <button id="account" onClick={create}>Create an account</button>
      </div>
      </div>
  );
}
