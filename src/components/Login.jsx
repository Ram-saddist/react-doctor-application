import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate() 
    function handleLogin(){
        console.log(email,password)
        axios.post("https://doc-back1.onrender.com/login",{email,password})
            .then(res=>{
                console.log(res)
                if(res.status===200){
                    localStorage.setItem("token",res.data.patient.email)
                    alert(res.data.message)
                    navigate("/")
                }
            })
            .catch((err)=>{
                alert(err?.response?.data.message)
            })
    }
    return (
        <div>
            <input type="email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} /> <br />
            <input type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} /> <br />
            <button onClick={handleLogin}>Submit</button>
        </div>
    )
}
