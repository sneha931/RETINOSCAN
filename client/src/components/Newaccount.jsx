import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signinaccount.css';

export default function Newaccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("https://retinoscan-server.vercel.app/api/createacc", { username, email, password}, {
                withCredentials: true});

            if (res.data === "exists") {
                alert("Already have account, just log in");
                navigate('/signinaccount');
            } else if (res.data === "not exists") {
                navigate('/dashboard');
            }
        } catch (error) {
            console.error("There was an error creating the account!", error);
        }
    }

    return (
        <div className='account'>
            <h1>Sign up</h1>
            <form onSubmit={submit}>
                <label htmlFor="name">Enter Username:</label>
                <input
                    type="text"
                    id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter name"
                    required
                />
                <label htmlFor="email">Enter Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <label htmlFor="password">Enter password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    minLength={5}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
