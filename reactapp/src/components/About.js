import { useState } from "react"







const About = () => {




    // Common useState 

    const [header] = useState({
        subHeading: "About Me",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
    })




    const [contact] = useState("")






    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className=" mainHeader">{header.subHeading}</h1>
                    <p>{header.text}</p>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="about_img">
                            <img src="/images/me-01-alt.png" alt="me"></img>
                        </div>
                    </div>


                    <div className="col-6">
                        <div className="about_info">
                            <h1>Hi There</h1>
                            <div className="about_info_p1">
                                <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                            </div>

                            <div className="about_info_p2">
                                <p>nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                            </div>

                            <div className="info_contacts">
                                <div className="row">
                                    <div className="col-6">
                                        <strong>Name:</strong>
                                        <p>Jonathan Doe</p>
                                    </div>

                                    <div className="col-6">
                                        <strong>Email:</strong>
                                        <p>example@domain.com</p>
                                    </div>

                                    <div className="col-6">
                                        <strong>Phone:</strong>
                                        <p>+1 023 454 345</p>
                                    </div>

                                    <div className="col-6">
                                        <strong>LinkedIn:</strong>
                                        <p>Jonathan_123</p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default About