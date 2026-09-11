import React from 'react'
import './Home.css'
export default function Doctorcard(props) {

  return (
    <div className="card">
      <p>Name:{props.name}</p>
      <p>Specialization:{props.specialization}</p>
      <p>Gender:{props.gender}</p>
      <p>Salary:{props.salary}</p>
      <p>Age:{props.age}</p>
    </div>
  )
}
