import React from 'react'
import logo from "./images/logo.png"
import {Link} from "react-router-dom"
function Nav() {
    return (
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <span className="navbar-brand"> <img src={logo} width="50" height="30" className="d-inline-block align-top" alt="COVID-2019"/>COVID-2019</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            
        <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             India
            </span>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/india">India</Link>
                <Link className="dropdown-item" to="/official">From Official Sources</Link>
                <Link className="dropdown-item" to="/testing">ICMR Testing History</Link>
            
            </div>
        </li>
            
            
            
        </ul>
    </div>
    </div>
</nav>
        
    )
}

export default Nav
