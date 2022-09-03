import React from "react"
import Feature from "./Feature"
import Image1 from "../assets/feature-1-img.png"
import Image2 from "../assets/feature-3-img.png"
import Image3 from "../assets/feature-2-img.png"

function Features(){
    return(
        <section className="feature padding-mobile">
            <div className="circle bg-circle d-sm-none"></div>
            <div className="circle sm-circle d-sm-none"></div>
            <div className="container margin-x-auto">
                <h3 
                    data-aos="slide-down" 
                    className="feature-title title-mobile width-100 mb-2"
                >
                    Market sentiments, portfolio, and run the infrastructure of your choice
                </h3>
                <Feature 
                    class="flex-inverse"
                    img={Image1}
                    title="Invest Smart"
                    content="Get full statistics information about the behaviour of buyers and sellers will help you to make the decision"
                />
                <Feature 
                    class="detailed-statistics"
                    img={Image3}
                    title="Detailed Statistics"
                    content="View all mining and related information in realtime, at any point at any location and decide which polls you want to mine in"
                />
                <Feature 
                    class="flex-inverse width-682"
                    img={Image2}
                    title="Grow your profit and track your investments"
                    content="Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments."
                />
            </div>
        </section>
    )
}

// function Features(props){
//     return(
//         <div className="feature-wrapper">
//             <div className="feature-text">

//             </div>
//             <img className="feature-chart"/>
//         </div>
//     )
// }

export default Features