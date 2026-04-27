import { useState } from 'react';
import { Phone, Clock } from 'lucide-react';
import './FloatingAction.css';

const FloatingAction = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fab-container ${isOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="fab-menu glass-panel">
                <div className="fab-menu-item">
                    <Clock size={18} className="fab-icon-small" />
                    <div className="fab-text">
                        <strong>Trading Hours</strong>
                        <span>Mon-Sat 07:00-17:00, Sun & PH 08:00-15:00</span>
                    </div>
                </div>
                <a href="tel:0799770962" className="fab-menu-item call-action">
                    <Phone size={18} className="fab-icon-small" />
                    <div className="fab-text">
                        <strong>Call Us</strong>
                        <span>079 977 0962</span>
                    </div>
                </a>
            </div>

            <button className="fab-main-btn" aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)}>
                <Phone size={24} />
            </button>
        </div>
    );
};

export default FloatingAction;
