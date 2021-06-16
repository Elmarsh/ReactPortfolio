import { useState } from 'react';
import { FaGithub, FaCamera, FaCodepen, FaApple, FaFileVideo, FaSearchPlus } from 'react-icons/fa';






const Services = () => {



    // Common useState 

    const [header] = useState({
        mainHeader: "SERVICES",
        subHeading: "MY SERVICES",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
    })




    // Services_box useSatate 

    const [state] = useState([
        { id: 1, icon: FaGithub, heading: 'Web Development', text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy' },
        { id: 2, icon: FaCamera, heading: 'Photography', text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy' },
        { id: 3, icon: FaCodepen, heading: 'Web Design', text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy' },
        { id: 4, icon: FaApple, heading: 'App Developing', text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy' },
        { id: 5, icon: FaFileVideo, heading: 'Video Editing', text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy' },
        { id: 6, icon: FaSearchPlus, heading: 'SEO Expart', text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy' },

    ])


    return (
        <div className="services">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className=" mainHeader">{header.subHeading}</h1>
                        <p>{header.text}</p>
                    </div>


                    <div className="row">

                        {
                            state.map((info, index) => (
                                <div className="col-4" key={index}>
                                    <div className="services_box">
                                        <info.icon className="commonIcons" />

                                        <div className="services_box-header">{info.heading}</div>
                                        <div className="services_box-p">{info.text}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services