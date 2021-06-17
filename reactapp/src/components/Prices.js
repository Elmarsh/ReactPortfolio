import { useState } from "react";







const Prices = () => {



    // Common useState 

    const [header] = useState({
        mainHeader: "CHOOSE A PLAN",
        subHeading: "Pricing Plan",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
    })


    const [state] = useState([

        { id: 1, heading: "Basic", price: "50", msg1: "5GB Storage Space", msg2: "20GB Monthly Bandwidth", msg3: "My SQL Databases", msg4: "100 Email Account", msg5: "10 Free Domain Names" },
        { id: 2, heading: "Standard", price: "80", msg1: "5GB Storage Space", msg2: "20GB Monthly Bandwidth", msg3: "My SQL Databases", msg4: "100 Email Account", msg5: "10 Free Domain Names" },
        { id: 3, heading: "Premium", price: "160", msg1: "5GB Storage Space", msg2: "20GB Monthly Bandwidth", msg3: "My SQL Databases", msg4: "100 Email Account", msg5: "10 Free Domain Names" }

    ])


    return (
        <div className="prices">
            <div className="container">
                <div className="prices_header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className=" mainHeader">{header.subHeading}</h1>
                        <p>{header.text}</p>
                    </div>
                </div>

                <div className="row">
                    {
                        state.map((pricess, i) => (
                            <div className="col-4" key={i}>
                                <div className="price">
                                    <h4 className="price_heading">{pricess.heading}</h4>
                                    <div className="price_rs">
                                        <span className="amike_currency">$</span>
                                        {pricess.price}
                                    </div>
                                    <ul>
                                        <li>{pricess.msg1}</li>
                                        <li>{pricess.msg2}</li>
                                        <li>{pricess.msg3}</li>
                                        <li>{pricess.msg4}</li>
                                        <li>{pricess.msg5}</li>
                                    </ul>

                                    <div className="price_btn">
                                        <a href="#portfolio" className="btn btn-outline">
                                            Purchase
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export default Prices;