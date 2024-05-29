import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
export default function AddItem() {
  const navigate=useNavigate()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
const showbill=()=>{
  navigate('/billing')
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post('https://retinoscan-2.onrender.com/bill/items',{name,price});
      if(res.data="success"){
        alert("item added")
        setName('')
        setPrice('')
      }
      else{
        alert("failed to add item")
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        id='input1'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
        id='input2'
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" className='btn1'>Add Item</button>
      </form>
      <button type='submit' onClick={showbill} className='btn2'>show bill</button>
    </div>
  )
}
