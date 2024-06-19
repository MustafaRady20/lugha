import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header/Header"
// import Footer from '../components/Footer/Footer'
import "./layout.css"
export default function Layout() {
  return (
    
      <div className="layout">
        <Header />
        <Outlet />
        
      </div>
  
  )
}
