import React, { Component } from 'react'

export class DropDown extends Component {

  render() {
    return (
      <div>
        <div className="dropdown">
        <button style={{marginLeft: '20px'}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Display
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Status</a></li>
            <li><a className="dropdown-item" href="#">User</a></li>
            <li><a className="dropdown-item" href="#">Priority</a></li>
        </ul>
        </div>
      </div>
    )
  }
}

export default DropDown
