import React from "react"
import Illustration from "../assets/Illustrations.svg"
import Darch from "../assets/Dd-arch.svg"
import Uarch from "../assets/uarch.svg"
import Feature from "./Feature"

function WhyCrappo(){
    return(
        <section className="why-crappo padding-mobile">
            <div className="container margin-x-auto">
                <div className="why-bar d-sm-none"></div>
                <img src={Darch}  className="d-arch d-sm-none" />
                <img src={Uarch}  className="u-arch d-sm-none" />
                <div className="numbers-container flex-column-align-center">
                    <Numbers delay="" icon="chart-column" number="$30B" text="Digital Currency Exchange"/>
                    <Numbers delay="200" icon="user" number="10M+" text="Trusted wallet investor"/>
                    <Numbers delay="400" icon="earth-americas" number="195" text="Countries supported"/>
                </div>
                <Feature 
                    img={Illustration}
                    title="Why you should choose CRAPPO"
                    content="Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews."
                />
            </div>
        </section>
    )
}

function Numbers(props){
    return(
        <div data-aos="fade-up" data-aos-delay={props.delay} className="numbers-wrapper mb-2">
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

