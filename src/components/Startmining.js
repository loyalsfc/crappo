import React from "react";
import eth from "../assets/vectoreth.svg"
import btc from "../assets/Vectorbtc.svg"

function Startmining(){
    return(
        <section className="start-mining">
            <div className="bar"></div>
            <div className="bar2"></div>
            <div className="mining-wrapper">
                <div className="mining-text">
                    <h4 className="mining-title">Start mining now</h4>
                    <p className="mining-content">Join now with CRAPPO to get the latest news and start mining now</p>
                </div>
                <input type="email" className="hash-rate-input" placeholder="Enter your email" />
                <button className="button-sm">Subscribe</button>
                <img src={eth} className="vector eth"/>
                <img src={btc} className="vector btc"/>
            </div>
        </section>
    )
}

export default Startmining