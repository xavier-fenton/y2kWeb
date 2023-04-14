import React from 'react'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar-main">
        <ul>
          <div>Home</div>
          <div>World</div>
          <div>Random</div>
          <div>Contact</div>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
