import { MapPin } from 'lucide-react';
import logoImg from '../assets/logo.webp';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo-container">
                            <img src={logoImg} alt="Coffee Time Logo" className="logo-icon" />
                            <span className="logo-text">Coffee Time</span>
                        </div>
                        <p className="footer-desc">
                            Your local destination for the perfect cup of coffee, freshly baked artisanal pizzas, and pure beef burgers.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Visit Us</h4>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <MapPin size={18} className="footer-icon" />
                                <span>48 Ontdekkers Road<br />Helderkruin, Roodepoort</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Hours</h4>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <span className="day">Monday - Saturday:</span>
                                <span className="time">07:00 - 17:00</span>
                            </li>
                            <li className="footer-item">
                                <span className="day">Sun & Public Holidays:</span>
                                <span className="time">08:00 - 15:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Coffee Time. All rights reserved.</p>
                    <p className="creator">Made with passion by Ian Tolmay</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
