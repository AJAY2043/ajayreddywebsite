import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="main-nav">
         <div className="nav-tittle">
            <Link to='/'><h3>Ajay Reddy's</h3></Link>
         </div>
         <div className="nav-search">
            <input type='text' placeholder='know about me here...'/>
         </div>
         <div className="nav-aboutme">
            <Link to='/aboutme'><h3>AboutMe</h3></Link>
         </div>
         <div className="nav-collab">
         <Link to='/mystartupideas'><h3>My Startup Idea's</h3></Link>
         </div>
        </div>
        <div className="sub-nav">
        <div className="nav-projects">
            <Link to='/myprojects'><h3>My Projects</h3></Link>
        </div>
        <div className="nav-startup">
            <Link to='/collabrations'><h3>Collabrate with Me</h3></Link>
        </div>
        <div className="nav-contact">
            <Link to='/contactme'><h3>ContactMe</h3></Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar

