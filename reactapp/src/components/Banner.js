import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaLinkedinIn, FaPlay } from 'react-icons/fa';

const Banner = () => {



    const [state] = useState({
        title: "I am Jonathan Doe",
        text: "i,m Jonathan, professional web developer with long time experience in this field",
        image: "/images/man-01.png"
    });




    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header-content">

                            <div className="header_section">

                                <ul className="header_ul">
                                    <li><FaFacebookF /> </li>
                                    <li><FaTwitter /></li>
                                    <li><FaPinterest /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaLinkedinIn /></li>
                                </ul>


                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                                

                                <div className="header_buttons">
                                    <a href="#portfolio" className="btn btn-outline">
                                        My Portfolio
                                    </a>

                                    <a href="#portfolio" className="btn btn-smart">
                                        <FaPlay />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-6">
                        <div className="banner_image">
                            <img src={state.image} alt='man' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner;