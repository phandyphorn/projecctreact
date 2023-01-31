import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { Link, useLocation } from 'react-router-dom';

// Navbar connect with app (make navbar menu such as home, contact or about)
function Navbar() {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(()=> {
        setUrl(location.pathname);
    }, [location])

    return (
        <nav>
            <ul className='left-nav'>
                {/* Follow google and put class at normal, it show the same */}
                    <li>
                        <Link className={"underline" + (url === "/" ? " active" : "")} to='/'>Home</Link>
                    </li>

                    <li>
                        <Link className={"underline" + (url === "/about" ? " active" : "")} to='/about'>About</Link>
                    </li>

                    <li>
                        <Link className={"underline" + (url === "/contact" ? " active" : "")} to='/Contact'>Contact</Link>
                    </li>

                    <li>
                        <Link className={"underline" + (url === "/service" ? " active" : "")} to='/service'>Service</Link>
                    </li>
                </ul>

                <ul className='right-nav'>
                    <li>
                        <Link className={"underline" + (url === "/signin" ? " active" : "")} to='/signin'>SignIn</Link>
                    </li>

                    <li>
                        <Link className={"underline" + (url === "/signup" ? " active" : "")} to='/signout'>SignOut</Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;
