import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/MovieDBLogo.png"
import "../index.css"

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='movie db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}