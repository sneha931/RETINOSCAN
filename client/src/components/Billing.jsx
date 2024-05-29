import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Billing() {
  const navigate=useNavigate();
  const [items, setItems] = useState([]);
const paymentsection=()=>{
  navigate('/payment')
}
useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/bill/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  fetchItems();
}, []);
  return (
    <div className='billing'>
      <h2>Item List</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item=>(
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button type='submit' onClick={paymentsection}>Payment</button>
    </div>
  )
}

