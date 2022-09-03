import React from "react";
import Calculate from "./Calculate";
import Cryptocurrencies from "./Cryptocurrencies";
import Litecoin from "../assets/litecoin.png"
import Bitcoin from "../assets/bitcon.png"
import Ethereum from "../assets/ethereum.png"

function Main(){
    return (
        <main className="padding-mobile">
            <div className="container margin-x-auto">
                <div className="main-background"></div>
                <div className="check-how-much">
                    <h3 data-aos="zoom-in-left" className="why-title title-mobile">Check how much you can earn</h3>
                    <p 
                        data-aos="zoom-in-left"  
                        data-aos-delay="200"
                        data-aos-easing="ease-in-out-back"
                        className="check-how-much-content"
                    > 
                        Let’s check your hash rate to see how much you will earn today, <br className="d-sm-none"/>Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                <Calculate />
                <h3 
                    data-aos="fade-up-right" 
                    className="trade-securely title-mobile width-100"
                >
                    Trade securely and market the high growth cryptocurrencies.
                </h3>
                <div className="cryptocurrencies-container flex-column-align-center">
                    <Cryptocurrencies
                        animation="zoom-in-right"
                        delay="0"
                        img={Bitcoin} 
                        name="Bitcoin" 
                        symbol="BTC" 
                        text="Digital currency in which a record of transactions is maintained." 
                        class="crypto-bitcoin"
                    >
                        <button className="button-crypto button-sm">Start Mining <span>{">"}</span></button>
                    </Cryptocurrencies>
                    <Cryptocurrencies
                        animation="zoom-in"
                        delay="100" 
                        img={Ethereum} 
                        name="Ethereum" 
                        symbol="ETH" 
                        text="Blockchain technology to create and run decentralized digital applications." 
                    >
                        <button className="crypto-button button-crypto">{">"}</button>
                    </Cryptocurrencies>
                    <Cryptocurrencies
                        animation="zoom-in-left"
                        delay="200" 
                        img={Litecoin} 
                        name="Litecoin"
                        symbol="LTC" 
                        text="Cryptocurrency that enables instant payments to anyone in the world."
                        >
                        <button className="crypto-button button-crypto">{">"}</button>
                    </Cryptocurrencies>
                </div>
            </div>
        </main>
    )
}

export default Main