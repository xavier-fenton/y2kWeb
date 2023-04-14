import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="nav-bar-wrapper">
        <div className="nav-bar-main">
          <div className="nav-bar-box">
            <img className="nav-image" src="/images/1star.png" alt="head" />
          </div>
          <div>PAGES:</div>
          <div>
            {/* this will be components */}
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
        </div>
        <div>Page:</div>
      </div>
    </>
  )
}

export default NavBar
