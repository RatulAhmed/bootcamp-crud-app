import React from 'react'
import '../styles/nav.css'

const Nav = () => {
                //<Link className="link" to="/"> Home</Link>
  //<Link className="link" to="/login">Login</Link>
  return(
        <div>
            <div className='nav-bar'>
              <h2> Campuses</h2>
                <div className="button-flex-container">
                    <div className="button-box ">
                      Home
                    </div>
                    <div className="button-box">
                      Campuses
                    </div>
                    <div className="button-box ">
                      Students
                    </div>
                </div>
            </div>
          </div>
  )
}
export default Nav
