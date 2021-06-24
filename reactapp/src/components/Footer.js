import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';



const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerSection">

                    <div className="row justify-center">
                        <div className="col-6">
                            <div className="footerSection-logo">
                                <img src="/images/logo.png" alt="" />
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <div className="footerCircles">
                                <ul>
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaLinkedinIn /></li>
                                </ul>
                            </div>

                            <div className = "copyright-text">
                                <p>Copyright © 2020 Ami.Ke All Rights Reserved by ThemeBing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;