import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from '../../Modules/Auths/login'
import SchoolSignup from '../../Modules/Auths/signup/school'
import Choice from '../../Modules/Choice'
import Feed from '../../Modules/Feed'
import Home from '../../Modules/Home'
import Found from '../../Modules/School/found'
import SchoolProfile from '../../Modules/School/profile'
import UserProfile from '../../Modules/Student/profile'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school/profile" element={<SchoolProfile/>} />
        <Route path="/school/found" element={<Found/>} />
        <Route path="/school/signup" element={<SchoolSignup/>} />
        <Route path="/student/profile" element={<UserProfile/>} />  
        <Route path="/login" element={<Login/>} />  
        <Route path="/feed" element={<Feed/>} />  
        <Route path="/choice" element={<Choice/>} />  

      </Routes>
    </>
  )
}
