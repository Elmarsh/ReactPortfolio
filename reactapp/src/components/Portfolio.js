import { useState } from "react";







const Portfolio = () => {



    // Common useState 

    const [header] = useState({
        subHeading: "Portfolio Showcase",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
    })


    return (
        <div className="portfolio">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h1 className=" mainHeader">{header.subHeading}</h1>
                        <p>{header.text}</p>
                    </div>
                </div>

                <div className="row portfolio_items">
                    <div className="col-3">
                        <div className="item">
                            <img src="/images/p-1.jpg" alt="#"></img>
                            <div className="content">
                                <span className="art">Art Direction</span>
                                <h6>Rock</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Portfolio;