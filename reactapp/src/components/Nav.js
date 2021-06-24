import { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';

const Nav = () => {

    const [state, setState] = useState(true)

    return (
        <nav className="navbar">
            <div className="container">

                <div className="navbar_container">

                    <ul className="navbar_left">
                        <li className="navbar_left-logo">
                            <img src='/images/logo.png' alt='logo' />
                        </li>
                    </ul>

                    {
                        state ? <ul className="navbar_right">
                            <li><a href="!#">Home</a></li>
                            <li><a href="!#">Services</a></li>
                            <li><a href="!#">About</a></li>
                            <li><a href="!#">Skills</a></li>
                        </ul> : ""

                    }

                </div>
            </div>

            <div onClick={() => setState(!state)} className="toggle"><FaAlignJustify /></div>
        </nav>
    )
}


export default Nav