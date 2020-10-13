import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <section className="container" >
            <nav className="navbar navbar-expand-lg navbar-light">
                <img style={{width:'100px'}} src={logo} alt />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active mr-4">
                        <Link className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className="nav-link">Hour Portfolio</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className="nav-link">Our Team</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className="nav-link">Contact Us</Link>
                    </li>
                    <li className="nav-item mr-4 ">
                        <Link className="nav-link btn btn-secondary text-white">Login</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;