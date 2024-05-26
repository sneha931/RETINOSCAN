import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
export default function Repform() {
    const [name,setName]=useState('');
  const [id,setId]=useState('');
  const navigate=useNavigate();
  async function submit(e){
  e.preventDefault();
  try{
    const res= await axios.post("https://retinoscan-server.vercel.app/report/details",{id,name})
    if(res.data==="success"){
      alert("completed process")
      navigate("/reports")
    }
    else{
      alert("error occured")
    }
  }
  catch(e){
    console.log(e);
  }
  }
  return (
      <div>
       <form onSubmit={submit}>
       <label htmlFor='id'>Enter patient id:</label>
        <input type="text" id="id" value={id} onChange={(e)=>setId(e.target.value)} required/>
       <label htmlFor='name'>Enter patient name:</label>
        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <button type='submit'>submit</button>
       </form>
       
    </div>
  )
}
