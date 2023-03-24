import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Icon.png'

const Navbar = ({ TeamNames }) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="logo" height={"50px"} />
                Yoga Club NITK
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navItems">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 border-start">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/events" className="nav-link active">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blogs" className="nav-link active">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/documents" className="nav-link active">Reports and Magazines</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <Link to="#" className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown">Teams</Link>
                        <ul className="dropdown-menu">
                            {Object.keys(TeamNames).map((key) => {
                                return (
                                    <li key={key}>
                                        <Link to={`/teams/${key}`} className="dropdown-item">{TeamNames[key]}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar
