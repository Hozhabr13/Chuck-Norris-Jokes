import React from "react"
import { NavLink } from "react-router-dom"

const Header: any = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className={(props)=>props.isActive ? "nav-item active" : "nav-item" }>Home</NavLink>
        <NavLink to="/favorites" className={(props)=>props.isActive ? "nav-item active" : "nav-item"}>favorites</NavLink>
      </nav>
    </header>
  )
}

export default Header