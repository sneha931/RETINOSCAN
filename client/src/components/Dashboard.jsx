import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import "../styles/Dashboard.css";
import axios from "axios"
export default function Dashboard() {
  const navigate=useNavigate();
  const info=()=>{
      navigate('/dashform')
  }
  const [users,setUsers]=useState([])
  const [input,setInput]=useState("");
  console.log(input)
  const fetchdata=async()=>{
    try{
      const res=await axios.get("https://retinoscan-2.onrender.com/patient/maindetails");
    setUsers(res.data);
    }
    catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchdata();
  },[])
  const handleCaptureClick = () => { 
    navigate('/capture');
  };
  const billsection=()=>{
    navigate('/additem');
  }
  const reportsection=()=>{
    navigate('/reports')
  }
  const filteredusers=users.filter(user=>user.name.toLowerCase().includes(input.toLowerCase()))
  return (
    <div className='dashboard'>
      <div className='left'>
        <div className='headings'>
          <h3>Retinoscan AI</h3>
          <button >Dashboard</button>
          <button onClick={handleCaptureClick}>Image Capture</button>
          <button onClick={billsection}>Billing</button>
          <button onClick={reportsection}>Reports</button>
        </div>
        
      </div>
      <div className='right'>
      <input type='text' placeholder='search' onChange={(e)=>setInput(e.target.value)} value={input}
        
      />
      <div>
      <table>
        <thead>
            <tr>
                <th>Patient</th>
                <th>Eye</th>
                <th>Uploaded</th>
                <th>AI Insights</th>
                <th>Detections</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
            filteredusers.map(user=>(
             <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.eye}</td>
              <td>{user.date}</td>
              <td>None</td>
              <td>Normal</td>
              <td><a href="">Review</a></td>
             </tr> 
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
    <div className='upload-btn'>
    <button onClick={info}>New Upload</button>
    </div>
    </div>
  );
}
