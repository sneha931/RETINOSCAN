import React from 'react';
import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='left'>
        <div className='headings'>
        <h3>Retinoscan AI</h3>
        <button>Dashboard</button>
        <button>Analysis</button>
        <button>Reports</button>
        </div>
        <div className='but'>
            <button>New report</button>
        </div>
        </div>
    <div className='right'>
        <h2>Reports</h2>
        <p>View detailed reports on patients retinal images and AI analysis</p>
        <input type='text' placeholder='Search by patient or report ID'></input>
        <table>
            <tr>
                <th>Report ID</th>
                <th>patient Name</th>
                <th>Date Created</th>
                <th>AI analysis</th>
                <th>Actions</th>
            </tr>
            <tr>
                <td className='id'>#1234</td>
                <td>Samantha</td>
                <td className='date'>Dec 15,2022</td>
                <td className='area'>Ratinopathy</td>
                <td ><a href="">View details</a></td>
            </tr>
            <tr>
            <td className='id'>#1234</td>
                <td>john</td>
                <td className='date'>Nov 15,2022</td>
                <td className='area'>Normal</td>
                <td ><a href="">View details</a></td>
            </tr>
        </table>
    </div>
    </div>
  )
}
