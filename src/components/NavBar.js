import React, { Component } from 'react'
import './NavBar.css'
export class NavBar extends Component {
  render() {
    return (
      <div className='navDiv'>
        <nav className="Nav_bar">
			<ul>
				<li><a href="\" >HOME</a></li>
				<li><a href="\" >News</a></li>
				<li><a href="\" >Updates</a></li>
				<li><a href="\" >About</a></li>
				<li><a href="\" >Support</a></li>

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