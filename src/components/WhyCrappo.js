import React from "react"
import Illustration from "../assets/Illustrations.svg"
import Darch from "../assets/Dd-arch.svg"
import Uarch from "../assets/uarch.svg"
import Feature from "./Feature"

function WhyCrappo(){
    return(
        <section className="why-crappo">
            <div className="why-bar"></div>
            <img src={Darch}  className="d-arch" />
            <img src={Uarch}  className="u-arch" />
            <div className="numbers-container">
                <Numbers delay="" icon="chart-column" number="$30B" text="Digital Currency Exchange"/>
                <Numbers delay="200" icon="user" number="10M+" text="Trusted wallet investor"/>
                <Numbers delay="400" icon="earth-americas" number="195" text="Countries supported"/>
            </div>
            <Feature 
                img={Illustration}
                title="Why you should choose CRAPPO"
                content="Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews."
            />
        </section>
    )
}

function Numbers(props){
    return(
        <div data-aos="fade-up" data-aos-delay={props.delay} className="numbers-wrapper">
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

