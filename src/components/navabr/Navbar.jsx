import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>Booking</span>
            <div className='navItems'>
                <button className='navbutton'>Register</button>
                <button className='navbutton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar