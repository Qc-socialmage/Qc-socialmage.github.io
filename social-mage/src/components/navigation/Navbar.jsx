import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';

export default function Navbar() {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <Link to="/">SocialMage</Link>
            </div>

            <button
                className="navbar_toggle"
                onClick={() => setIsOpened(!isOpened)}
            >
                &#9776;
            </button>

            <div className={`navbar_menu ${isOpened ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
            </div>
        </nav>
    );
}