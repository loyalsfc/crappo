import React from "react"

function Feature(props){
    return(
        <div className={"why-crappo-content " + props.class}>
                <img src={props.img} />
                <div className="why-text">
                    <h3 className="why-title">{props.title}</h3>
                    <p className="why-main-content">{props.content}</p>
                <button className="button-sm">Learn More</button>
            </div>
        </div>
    )
}

export default Feature