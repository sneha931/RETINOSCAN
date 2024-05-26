import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
    const [password, setPassword] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        console.log(`Submitting new password for token: ${token}`);
        
        try {
            const response = await axios.post(`https://retinoscan-server.vercel.app/api/resetpassword/${token}`, { password });
            console.log(response.data);
            if (response.data.status) {
                navigate('/signinaccount');
            } else {
                alert("password reset failed")
                console.log("Password reset failed:", response.data);
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div className='account'>
            <h1>Reset Password</h1>
            <form onSubmit={submit}>
                <label htmlFor="password">Enter password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                />
                <button type="submit">Reset</button>
            </form>
        </div>
    );
}

export default ResetPassword;
