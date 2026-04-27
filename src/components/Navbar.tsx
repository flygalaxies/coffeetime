import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/logo.webp';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src={logoImg} alt="Coffee Time Logo" className="logo-icon" />
                    <span className="logo-text">Coffee Time</span>
                </Link>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                </div>

                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={closeMenu} end>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/menu" className="nav-link" onClick={closeMenu}>Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/specials" className="nav-link" onClick={closeMenu}>Specials</NavLink>
                    </li>
                    <li className="nav-item mobile-only">
                        <a href="tel:0799770962" className="btn btn-primary nav-btn">Call Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
