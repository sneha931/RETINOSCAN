import React,{useEffect,useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../styles/Dashboard.css"
export default function Reports() {
  const navigate=useNavigate();
  const [input,setInput]=useState("")
  const data=()=>{
    navigate('/detailsform')
  }
  const[users,setUsers]=useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/report/details");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
 const filterinput=users.filter(user=>user.name.toLowerCase().includes(input.toLowerCase())|| user.id.toString().includes(input))
  return (
    <div className='dashboard'>
    <div className='right'>
    <input type='text' placeholder='search by id or patient name' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Data created</th>
            <th>AI analysis</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {filterinput.map(user=>(
          <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.date}</td>
                <td>Normal</td>
                <td><a href='#'>View details</a></td>
                </tr>
            
         ))}
        </tbody>
      </table>
    </div>
    <div className='upload-btn'>
    <button onClick={data}>New Report</button>
    </div>
    </div>
  )
}
