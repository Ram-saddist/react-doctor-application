import React, { useState } from 'react'
import axios from 'axios'
export default function Adddoctor() {
    const [name,setName] = useState("")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("")
    const [specialization,setSpecialization]=useState("")
    const [salary,setSalary]=useState("")
    
    function add(){
        axios.post(
            "https://doc-back1.onrender.com/doctors",
            {name,age,gender,salary,specialization}
        )
        .then((res)=>{
            console.log(res)
        })
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='Enter doctor name' 
                name="name" 
                onChange={(e)=>setName(e.target.value)}/> <br />
            
            <input 
                type="text" 
                placeholder='Enter age'
                name="age" 
                onChange={(e)=>setAge(e.target.value)}/>
            <br />
            <input type="text" placeholder='Enter salary'
                name="salary" 
                onChange={(e)=>setSalary(e.target.value)} />
                <br />
            
            <input type="text" placeholder='Enter specialization' 
                name="specialization" 
                onChange={(e)=>setSpecialization(e.target.value)} /> <br />
            
            <input type="text" placeholder='Enter gender' 
                name="gender"
                onChange={(e)=>setGender(e.target.value)} />
                <br />
            <button onClick={add}>Add doctor</button>
        </div>
    )
}
