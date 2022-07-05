import React, {useState} from 'react';
import '../stylesheets/App.css';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className="navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>Open</button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder='Search here!'></input>
                <button className='searchButton'>Search</button>
            </div>
        </nav>
    );
}

export default Navbar;