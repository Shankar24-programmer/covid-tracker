import React from 'react'
import '../Components/Navbar.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#"><Link to="/" style={{"textDecoration":"none","color":"white"}}>Covid Tracker</Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{"color":"white"}}><Link to="/" style={{"textDecoration":"none","color":"white"}}>Home</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{"color":"white"}}><Link to="/search" style={{"textDecoration":"none","color":"white"}}>Search</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{"color":"white"}}><Link to="/global" style={{"textDecoration":"none","color":"white"}}>Global</Link></a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}
