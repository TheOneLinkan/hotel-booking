import { Link } from "react-router-dom"

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">

            <Link className="navbar-brand d-flex align-items-center" to="/">

                <img src="/hexaspot-logo.png" alt="Hexaspot Logo" width="60" height="40" className="me-2" />

                <span>

                    <span className="primary">Hexa</span>
                    <span className="secondary">spot</span> Hotel

                </span>

            </Link>

            <div className="navbar-nav ms auto">

                <Link className="nav-link" to="/">Hem</Link>
                <Link className="nav-link" to="/booking">Bokning</Link>
                <Link className="nav-link" to="/contact">Kontakt</Link>

            </div>

        </nav>

    )

}

export default Navbar