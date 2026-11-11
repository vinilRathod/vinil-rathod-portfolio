import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className='vr-navbar'>

            <a href='#home' className='vr-navbar-logo' onClick={closeMenu}>
                VR
            </a>
            <button
                className='vr-navbar-toggle'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls='navbar-links'
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav 
                id='navbar-links' 
                className={`vr-navbar-links ${menuOpen? "active": ""}`}
            >
                <a href='#work' onClick={closeMenu}>Work</a>
                <a href='#about' onClick={closeMenu}>About</a>
                <a href='#experience' onClick={closeMenu}>Experience</a>
                <a href='#contact' onClick={closeMenu}>Contact</a>
            </nav>
        </header>
    )
}

export default Navbar
