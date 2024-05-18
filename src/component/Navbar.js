import React from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <div className='logo'><img src={logo} alt='jobpedia' /></div>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/jobs">Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/candidates">candidates</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
