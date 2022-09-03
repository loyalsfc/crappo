import React from "react"
import Logo from "../assets/logo.svg"
import visa from "../assets/visa.png"
import mastercard from "../assets/mastercard.png"
import bitcoin from "../assets/bitcoin.png"

function Footer(){
    return(
        <footer className="padding-mobile">
            <div className="container margin-x-auto">
                <div className="footer-links flex-column-align-center mb-2">
                    <img src={Logo} className="mb-2" />
                    <Footerlinks 
                        title="Quick Link"
                        link1="Home"
                        link2="Products"
                        link3="About"
                        link4="Features"
                        link5="Contact"
                    />
                    <Footerlinks 
                        title="Resources"
                        link1="Download whitepaper"
                        link2="Smart token"
                        link3="Blockchain Explorer"
                        link4="Crypto API"
                        link5="Interest"
                    />
                    <div>
                        <h3 className="footer-payment">We accept the following payment systems</h3>
                        <div className="footer-images">
                            <img src={visa} alt="visa" />
                            <img src={mastercard} alt="mastercard" className="mastercard"/>
                            <img src={bitcoin} alt="btcoin" />
                        </div>
                    </div>
                </div>
                <div className="footer-text flex-column">
                    <p className="copyright">&copy;2021 CRAPPO. All rights reserved </p>
                    <div className="social">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function Footerlinks(props){
    return(
        <div className="link-wrap">
            <h5 className="link-title mb-1">{props.title}</h5>
            <ul className="footer-link mb-2">
                <li>{props.link1}</li>
                <li>{props.link2}</li>
                <li>{props.link3}</li>
                <li>{props.link4}</li>
                <li>{props.link5}</li>
            </ul>
        </div>
    )
}

export default Footer