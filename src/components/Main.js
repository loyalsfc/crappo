import React from "react";
import Calculate from "./Calculate";
import Cryptocurrencies from "./Cryptocurrencies";
import Litecoin from "../assets/litecoin.png"
import Bitcoin from "../assets/bitcon.png"
import Ethereum from "../assets/ethereum.png"

function Main(){
    return (
        <main>
            <div className="main-background"></div>
            <div className="check-how-much">
                <h3 className="why-title">Check how much you can earn</h3>
                <p className="check-how-much-content"> Let’s check your hash rate to see how much you will earn today, <br/>Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <Calculate />
            <h3 className="trade-securely">Trade securely and market the high growth cryptocurrencies.</h3>
            <div className="cryptocurrencies-container">
                <Cryptocurrencies 
                    img={Bitcoin} 
                    name="Bitcoin" 
                    symbol="BTC" 
                    text="Digital currency in which a record of transactions is maintained." 
                    button={"Start mining "}
                    class="crypto-bitcoin"
                >
                    <button className="button-crypto button-sm">Start Mining <span>{">"}</span></button>
                </Cryptocurrencies>
                <Cryptocurrencies 
                    img={Ethereum} 
                    name="Ethereum" 
                    symbol="ETH" 
                    text="Blockchain technology to create and run decentralized digital applications." 
                >
                    <button className="crypto-button button-crypto">{">"}</button>
                </Cryptocurrencies>
                <Cryptocurrencies 
                    img={Litecoin} 
                    name="Litecoin"
                    symbol="LTC" 
                    text="Cryptocurrency that enables instant payments to anyone in the world."
                    >
                    <button className="crypto-button button-crypto">{">"}</button>
                </Cryptocurrencies>
            </div>
        </main>
    )
}

export default Main