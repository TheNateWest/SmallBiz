import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Containers/Login'
import BizDetails from './Containers/BizDetails'
import Listings from './Containers/Listings'
import AddBiz from './Containers/AddBiz'

export default function Router() {
  return (
    <Routes>
        <Route exact path="/" element={<Listings/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/details/:id" element={<BizDetails/>}/>
        <Route path="/add-business" element={<AddBiz/>}/>
    </Routes>
    
  )
}
