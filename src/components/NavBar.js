import React, { Component } from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
export class NavBar extends Component {
  render() {
    return (
      <div className='navDiv'>
        <nav className="Nav_bar">
			<ul>
				<li><Link to="/" >Home</Link></li>
        <li><Link to="/business" >Business</Link></li>
        <li><Link to="/entertainment" >Entertainment</Link></li>
        <li><Link to="/health" >Health</Link></li>
        <li><Link to="/science" >Science</Link></li>
        <li><Link to="/sports" >Sports</Link></li>
        <li><Link to="/technology" >Technology</Link></li>

         <li> <form style={{padding:'10px'}} className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form></li>
			</ul>
    </nav>
      </div>
      
    )
  }
}

export default NavBar
