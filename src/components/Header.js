import React from "react";
import Logo from '../assets/logo.svg'

function Header(){
    return (
        <header>
            <nav>
                <img src={Logo} height={40} alt="Logo" />
                <ul className="nav-menu">
                    <li className="menu-item">Products</li>
                    <li className="menu-item">Features</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Contact</li>
                </ul>
                <ul className="sign-in">
                    <li className="login">Login</li>
                    <li className="pipe-bar">|</li>
                    <li className="register">Register</li>
                </ul>
            </nav>
        <div className="about-container">
            <div className="info">
                <span className="save">75% SAVE</span>
                For the Black Friday weekend
            </div>
        </div>
        </header>
    )
}

export default Header