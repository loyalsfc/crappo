import React from "react";

function Cryptocurrencies(props){
    return(
        <div 
            data-aos={props.animation}
            data-aos-delay={props.delay} 
            className={"crypto-wrapper " + props.class}
        >
            <img src={props.img} />
            <h4 className="coin-name">{props.name} <span>{props.symbol}</span></h4>
            <p className="crypto-text">{props.text}</p>
            {props.children}
        </div>
    )
}

export default Cryptocurrencies