import React from "react"

function Feature(props){
    return(
        <div className={"why-crappo-content width-100 mb-2 " + props.class}>
            <img 
                data-aos="zoom-in"
                data-aos-duration="1500"
                src={props.img} 
                className="width-100"    
            />
            <div className="why-text width-100">
                <h3 data-aos="flip-left" data-aos-duration="1500" className="why-title title-mobile">{props.title}</h3>
                <p data-aos="flip-right" data-aos-duration="1500" className="why-main-content">{props.content}</p>
                <button data-aos="slide-up" data-aos-duration="1500" className="button-sm mb-2">Learn More</button>
            </div>
        </div>
    )
}

export default Feature