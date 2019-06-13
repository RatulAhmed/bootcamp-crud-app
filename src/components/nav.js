import React from 'react'
import '../styles/nav.css'
import {Link} from 'react-router-dom'
const Nav = (props) => {
  return(
        <div>

            <div className='nav-bar'>

                <div className="nav-button-flex-container">
                <div>
                  <img className="logo-nav" src="chimpy-logo.PNG"/>
                </div>
                    <div className="nav-button-box">
                      <Link className="nav-link" to="/">Home</Link>
                    </div>
                      <div className="nav-button-box">
                        Campuses
                      </div>
                      <div className="nav-button-box ">
                        <Link className="nav-link" to="/students">Students</Link>
                      </div>
                </div>
            </div>
          </div>
  )
}
export default Nav
