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
  /* Trying to identify the state by the attribute 'open' in classes component-box-<number>
    I could set the state of it being open and if open display it and if not display = none 
  */
  // var x = document.getElementsByClassName(`component-box-4`)[0]
  // var open = x.hasAttribute('open')
  // console.log(open)

  // if (open === true) {
  //   console.log(true)
  // } else if (!open) {
  //   console.log(false)
  // }

  console.log(x)
  return (
    <div className="Main-Component">
      <NavBar />
      <div className="main-body-container">
        <div className="component-box-1" open={true}>
          <div className="box-title">
            title <div>1</div>
          </div>
        </div>
        <div className="component-box-2" open={true}>
          <div className="box-title">
            title <div>2</div>
          </div>
        </div>
        <div className="component-box-3" open={true}>
          <div className="box-title">
            title <div>3</div>
          </div>
        </div>
        <div className="component-box-4" open={true}>
          <div className="box-title">
            title <div>4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainComponent
