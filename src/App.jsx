import React from 'react'
import Navbar from './components/Navbar'
import Adddoctor from './components/Adddoctor'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-doctor" element={<Adddoctor/>}/>
          <Route path="/login" element={<Login/>}/>
          {/*<Route path="/register" element={<Register/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}
