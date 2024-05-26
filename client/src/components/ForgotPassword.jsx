import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signinaccount.css';
export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try{
           await axios.post("https://retinoscan-server.vercel.app/api/Forgotpassword",{email})
           alert("check Your email for password")
           navigate('/signinaccount')
        }
        catch(e){
            console.log(e)
        }
    }
  return (
    <div className='account'>
            <h1>Forgot Password</h1>
            <form onSubmit={submit}>
                
                <label htmlFor="email">Enter Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
  )
}
