import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function DashForm() {
    const navigate=useNavigate();
    const [name,setName]=useState('')
    const [eye,setEye]=useState('')
 async function submit(e){
  e.preventDefault();
   try{
    const res=await axios.post("http://localhost:8000/patient/maindetails",{name,eye})
    if(res.data==='success'){
      alert("succesfully completed")
      navigate('/dashboard')
    }
    else{
      alert("failed")
    }
   }
   catch(e){
    console.log(e);
   }
 }
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor='name'>Enter patient name:</label>
        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <label htmlFor='eye'>Enter eye(right/left):</label>
        <input type='text' id="eye" value={eye} onChange={(e)=>setEye(e.target.value)} required/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
