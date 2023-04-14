import React from 'react'
import NavBar from './NavBar'

// I want each tiime that you click a page on the nav bar it pops up against the first page

const MainComponent = () => {
  return (
    <div className="Main-Component">
      <NavBar />
      <div className="main-body-container">
        <div className="component-box-1"></div>
        <div className="component-box-2"></div>
        <div className="component-box-3"></div>
        <div className="component-box-4"></div>
      </div>
    </div>
  )
}

export default MainComponent
