import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Doctorcard from './Doctorcard'
import "./Home.css"
export default function Home() {
    const [doctors, setDoctors] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        fetchDoctors()
    }, [])
    function fetchDoctors() {
        axios.get("https://doc-back1.onrender.com/doctors")
            .then(res => {
                console.log(res.data)
                setDoctors(res.data)
            })
    }
    const filteredDoctors=doctors.filter((i)=>{
        return i.name.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <div>
            <input type="text" name="search" placeholder='Enter doctor name' onChange={(e) => setSearch(e.target.value)} />
            <div className="parent-container">
                {
                    filteredDoctors.length > 0 ? (
                        filteredDoctors.map((i) => (
                            <Doctorcard
                                key={i.id}
                                name={i.name}
                                salary={i.salary}
                                gender={i.gender}
                                specialization={i.specialization}
                                age={i.age} />
                        ))
                    ) : (<p>Doctor not found....</p>)
                }
            </div>
        </div>
    )
}
