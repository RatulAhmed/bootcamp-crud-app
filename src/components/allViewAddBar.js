import React, {Component} from 'react'
import '../styles/allViewAddBar.css'

class AllViewAddBar extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
      <div className='add-bar'>

        <div className="add-button-flex-container">
          <div className="add-word-box"> All Campus</div>
          <div className="add-button-box"> Add Campus</div>
        </div>
      </div>

      </div>

  )
  }
}
export default AllViewAddBar
