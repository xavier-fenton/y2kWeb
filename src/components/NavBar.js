import React from 'react'
import '../styles/NavStyle/NavBar.css'
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
            {/* these will be components and dynamic not sure of the content */}
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
        <div className="page-dynamics">
          Page:<div>[1]{/*this number should b dynamic */}</div>
        </div>
      </div>
    </>
  )
}

export default NavBar
