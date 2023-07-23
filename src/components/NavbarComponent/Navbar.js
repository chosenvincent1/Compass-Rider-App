import React from "react";
import './Navbar.css';

const Navbar = ()=> {
    return (
        <div className="navbar">
            <div>
                <img src="../images/logo.svg" alt="" className="logo" />
            </div>

            <div className="navlink-container">
                <a className="navlink navlink-home">Home</a>
                <a className="navlink navlink-getTaxi">Get a Taxi</a>
                <a className="navlink navlink-mobileApp">Mobile App</a>
                <a className="navlink navlink-contactUs">Contact Us</a>
            </div>

            <div className="avatar__notification">
                <img src="../images/notification.svg" alt="Notification Icon" />
                <div className="avatar">
                    <img src="../images/chosen.jpg" alt="Chosen Image" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;