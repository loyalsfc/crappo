import React from "react";
import Logo from '../assets/logo.svg'
import BitcoinIllustration from '../assets/Illustration.svg'

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
            <div className="value-proposition">
                <div className="about-container">
                    <div className="info">
                        <span className="save">75% SAVE</span>
                        <span>For the Black Friday weekend</span>
                    </div>
                    <h2 className="about-title">Fastest & secure platform to invest in crypto</h2>
                    <p className="about-content">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transaction</p>
                    <button className="button-sm">
                        Try for FREE <span>{">"}</span>
                    </button>
                </div>
                <div className="bitcoin-illustration">
                    <img src={BitcoinIllustration} />
                </div>
            </div>
        </header>
    )
}

export default Header