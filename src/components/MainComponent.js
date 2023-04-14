import React from 'react'
import NavBar from './NavBar'
import '../styles/TreePageBoxes/PageBoxes.css'
import '../styles/index.css'

// I want each tiime that you click a page on the nav bar it pops up against the first page
/* these components classes should be components and functionally display them selves when clicking pages 
  they should pop on to one another when you click pages
  
  & the numbers withing the box titles should be dynamic
  */

const MainComponent = () => {
  return (
    <div className="Main-Component">
      <NavBar />
      <div className="main-body-container">
        <div className="component-box-1">
          <div className="box-title">
            title <div>1</div>
          </div>
        </div>
        <div className="component-box-2">
          <div className="box-title">
            title <div>2</div>
          </div>
        </div>
        <div className="component-box-3">
          <div className="box-title">
            title <div>3</div>
          </div>
        </div>
        <div className="component-box-4">
          <div className="box-title">
            title <div>4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainComponent
