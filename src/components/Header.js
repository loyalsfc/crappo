import React from "react";
import Logo from '../assets/logo.svg'
import BitcoinIllustration from '../assets/Illustration.svg'

function Header(){
    function showNav(){
        document.querySelector('.mobile-menu').style.top = 0;
    }
    function hideNav(){
        document.querySelector('.mobile-menu').style.top = '-100vh';
    }

    return (
        <header className="padding-mobile">
            <div className="header-bar d-sm-none"></div>
            <div className="header-bar2 d-sm-none"></div>
            <div className="mobile-menu">
                <i className="fa-solid fa-xmark close-btn" onClick={hideNav}></i>
                <ul className="mobile-nav-menu">
                    <li className="menu-item">Products</li>
                    <li className="menu-item">Features</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Contact</li>
                    <div>
                        <a href="#" className="mobile-login">Login</a>
                        <span className="mobile-pipe-bar">|</span>
                        <button className="mobile-register">Register</button>
                    </div>
                </ul>
            </div>
            <div className="container margin-x-auto">
                <nav>
                    <img src={Logo} height={40} alt="Logo" />
                    <ul className="nav-menu d-sm-none">
                        <li className="menu-item">Products</li>
                        <li className="menu-item">Features</li>
                        <li className="menu-item">About</li>
                        <li className="menu-item">Contact</li>
                    </ul>
                    <ul className="sign-in d-sm-none">
                        <li className="login">Login</li>
                        <li className="pipe-bar">|</li>
                        <li className="register">Register</li>
                    </ul>
                    <i className="fa-solid fa-bars hamburger-menu" onClick={showNav}></i>
                </nav>
                <div className="value-proposition flex-column">
                    <div className="about-container">
                        <div data-aos="fade-up-right" data-aos-duration="2000" className="info">
                            <span className="save">75% SAVE</span>
                            <span>For the Black Friday weekend</span>
                        </div>
                        <h2 data-aos="fade-left"  data-aos-duration="2000" className="about-title title-mobile">Fastest & secure platform to invest in crypto</h2>
                        <p  data-aos="slide-up" data-aos-duration="2000" className="about-content">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transaction</p>
                        <button data-aos="flip-down" data-aos-duration="2000" className="button-sm">
                            Try for FREE <span>{">"}</span>
                        </button>
                    </div>
                    <div data-aos="slide-up" data-aos-duration="2000" className="bitcoin-illustration">
                        <img src={BitcoinIllustration} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header