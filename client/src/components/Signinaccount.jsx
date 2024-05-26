import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/Signinaccount.css";

export default function Signinaccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("https://retinoscan-server.vercel.app/api/signinaccount", { email, password });
            if (res.data==="exists") {
                navigate("/dashboard");
            } else if (res.data==="not exists") {
                alert("pkease create account");
                navigate('/createacc');
            } else if (res.data==="incorrect password") {
                alert("Incorrect password")
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    
    return (
        <div className='account'>
            <h1>Signin</h1>
            <form onSubmit={submit}>
                <label htmlFor="email">Enter Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <label htmlFor="password">Enter password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" minLength={5} required />
                <button type="submit">submit</button>
                <Link to="/Forgotpassword">Forgot password</Link>
            </form>
        </div>
    );
}
