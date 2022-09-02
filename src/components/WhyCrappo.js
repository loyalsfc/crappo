import React from "react"
import Illustration from "../assets/Illustrations.svg"

function WhyCrappo(){
    return(
        <section className="why-crappo">
            <div className="numbers-container">
                <Numbers icon="chart-column" number="$30B" text="Digital Currency Exchange"/>
                <Numbers icon="user" number="10M+" text="Trusted wallet investor"/>
                <Numbers icon="earth-americas" number="195" text="Countries supported"/>
            </div>
            <div className="why-crappo-content">
                <img src={Illustration} />
                <div className="why-text">
                    <h3 className="why-title">Why you should choose CRAPPO</h3>
                    <p className="why-main-content">Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                    <button className="button-sm">Learn More</button>
                </div>
            </div>
        </section>
    )
}

function Numbers(props){
    return(
        <div className="numbers-wrapper">
            <div className="number-icon">
                <i className={"fa solid fa-" + props.icon}></i>
            </div>
            <div>
                <h4 className="numbers">{props.number}</h4>
                <p className="numbers-text">{props.text}</p>
            </div>
        </div>
    )
}

export default WhyCrappo

