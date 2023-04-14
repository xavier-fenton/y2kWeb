import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar-main">
        <ul>
          <div>PAGES</div>
          <div>
            <Link to="/">1</Link>
          </div>
          <div>
            <Link to="/">2</Link>
          </div>
          <div>
            <Link to="/">3</Link>
          </div>
          <div>
            <Link to="/">4</Link>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
