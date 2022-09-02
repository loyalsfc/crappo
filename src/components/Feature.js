import React from "react"

function Feature(props){
    return(
        <div className={"why-crappo-content " + props.class}>
            <img 
                data-aos="zoom-in"
                data-aos-duration="1500"
                src={props.img} />
            <div className="why-text">
                <h3 data-aos="flip-left" data-aos-duration="1500" className="why-title">{props.title}</h3>
                <p data-aos="flip-right" data-aos-duration="1500" className="why-main-content">{props.content}</p>
                <button data-aos="slide-up" data-aos-duration="1500" className="button-sm">Learn More</button>
            </div>
        </div>
    )
}

export default Feature