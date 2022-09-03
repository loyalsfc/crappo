import React from "react";
import eth from "../assets/vectoreth.svg"
import btc from "../assets/Vectorbtc.svg"

function Startmining(){
    return(
        <section className="start-mining  padding-mobile">
            <div className="container margin-x-auto">
                <div className="bar d-sm-none"></div>
                <div className="bar2 d-sm-none"></div>
                <div data-aos="zoom-out" className="mining-wrapper flex-column padding-mobile">
                    <div className="mining-text">
                        <h4 className="mining-title">Start mining now</h4>
                        <p className="mining-content mb-1">Join now with CRAPPO to get the latest news and start mining now</p>
                    </div>
                    <input type="email" className="hash-rate-input width-100 mb-2" placeholder="Enter your email" />
                    <button className="button-sm">Subscribe</button>
                    <img src={eth} className="vector eth"/>
                    <img src={btc} className="vector btc"/>
                </div>
            </div>
        </section>
    )
}

export default Startmining