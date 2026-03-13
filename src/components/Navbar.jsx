import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <a className="navbar-brand d-flex align-items-center" href="#">
                <img src="/hexaspot-logo.png" alt="HexaSpot Logo" width="60" height="40" className="me-2" />
                <span className="hotel-name">
                    <span className="primary">Hexa</span><span className="secondary">spot</span> Hotel
                </span>
            </a>

            <button
                className="navbar-toggler hex-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Hem</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/booking">Bokning</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Kontakt</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar