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
            <Link className="nav-link" to="/covid">Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active">
            <Link className="nav-link" to="/covid/india">Indian <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link" to="/covid/official">Official Sources <span className="sr-only">(current)</span></Link>
            </li>
            
            <li className="nav-item active">
            <Link className="nav-link" to="/covid/testing">Testing History <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link" to="/covid/summary">Summary<span className="sr-only">(current)</span></Link>
            </li>
        </ul>
    </div>
    </div>
</nav>
        
    )
}

export default Nav
