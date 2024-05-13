import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Signinaccount.css";

export default function Signinaccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formValid, setFormValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        if (email !== "" && password.length >= 5) {
            setFormValid(true);
        }
    }

    return (
        <div className='account'>
            <h1>Signin</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <label htmlFor="password">Enter password (5 digits):</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" minLength={5} required />
                <button type="submit" disabled={!formValid}>Submit</button>
            </form>
            {formValid && <Link to="/Dashboard">Go to Dashboard</Link>}
        </div>
    );
}
