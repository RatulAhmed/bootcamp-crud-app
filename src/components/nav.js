import React from 'react'
import '../styles/nav.css'

const Nav = (props) => {
  return(
        <div>
            <div className='nav-bar'>
              <h1> {props.pageName}</h1>
              <img src='../../chimpy-logo.PNG' alt='Chimpy Logo'/>
                <div className="nav-button-flex-container">
                    <div className="nav-button-box">
                      Home
                    </div>
                      <div className="nav-button-box">
                        Campuses
                      </div>
                      <div className="nav-button-box ">
                        Students
                      </div>
                </div>
             </div>
          </div>
  )
}
export default Nav;
