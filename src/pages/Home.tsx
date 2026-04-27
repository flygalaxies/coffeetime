import { useRef } from 'react';
import { ArrowRight, MapPin, Phone, Clock, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
    const storyRef = useRef<HTMLElement>(null);
    const infoRef = useRef<HTMLElement>(null);
    const instaRef = useRef<HTMLElement>(null);

    const isStoryVisible = useIntersectionObserver(storyRef);
    const isInfoVisible = useIntersectionObserver(infoRef);
    const isInstaVisible = useIntersectionObserver(instaRef);

    return (
        <main className="home-page">
            <SEO />
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <div className="brand-title-container animate-fade-in delay-100">
                        <div className="brand-welcome">Welcome</div>
                        <h1 className="brand-title-main">Coffee Time</h1>
                        <div className="brand-divider">
                            <span className="line left-line"></span>
                            <span className="asterisk">*</span>
                            <span className="line right-line"></span>
                        </div>
                    </div>
                    <p className="animate-fade-in delay-200 hero-text">
                        Experience the perfect blend of rich coffee, artisanal pizzas, and gourmet burgers in a warm, inviting atmosphere.
                    </p>
                    <div className="animate-fade-in delay-300 hero-actions">
                        <Link to="/menu" className="btn btn-primary">
                            Explore the Menu <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Promo Section: Sunday Carvery */}
            <section className="promo-section">
                <div className="container">
                    <div className="promo-card glass-panel animate-fade-in delay-200">
                        <div className="promo-content">
                            <div className="section-badge mb-2">Every Sunday</div>
                            <h2 className="promo-title">Sunday Carvery</h2>
                            <p className="promo-desc">
                                Join us for our famous Sunday Carvery. Experience the perfect roast with your family and friends.
                            </p>
                            <ul className="promo-features">
                                <li><span>✓</span> 2 Slow-Roasted Meats</li>
                                <li><span>✓</span> 3 Seasonal Vegetables</li>
                                <li><span>✓</span> Crispy Roasted Potatoes</li>
                                <li><span>✓</span> Decadent Pudding</li>
                            </ul>
                            <div className="promo-price-tag">
                                <span>Only</span> R140 <span>pp</span>
                            </div>
                        </div>
                        <div className="promo-image-container">
                            <div className="promo-image" role="img" aria-label="A delicious plate of traditional Sunday Carvery roast with beef, potatoes, and vegetables"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section ref={storyRef} className={`story-section container fade-up ${isStoryVisible ? 'visible' : ''}`}>
                <div className="story-grid">
                    <div className="story-image-container glass-panel">
                        <div className="story-image-placeholder" role="img" aria-label="Coffee Time barista preparing coffee"></div>
                    </div>
                    <div className="story-text-container">
                        <div className="section-badge">Discover</div>
                        <h2>Our Story</h2>
                        <p>
                            Coffee Time is a fully licensed restaurant and pizzeria located in the corner of Princess Crossing Shopping Centre. We pride ourselves on creating everything from scratch with the finest ingredients.
                        </p>
                        <p>
                            We make and bake everything in house, from the bread that goes underneath your pizza right to the 150g pure beef patty in the middle of your burger. Every bite is a testament to our dedication to quality and flavor.
                        </p>
                        <div className="features">
                            <div className="feature-item">
                                <span className="feature-dot"></span>
                                <span>Freshly Baked Daily</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-dot"></span>
                                <span>100% Pure Beef</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-dot"></span>
                                <span>Premium Coffee Beans</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info and Map Section */}
            <section ref={infoRef} className={`info-section fade-up ${isInfoVisible ? 'visible' : ''}`}>
                <div className="container text-center">
                    <div className="section-badge center">Come Visit</div>
                    <h2>Get In Touch</h2>

                    <div className="contact-cards">
                        <div className="contact-card glass-panel">
                            <div className="icon-wrapper">
                                <Phone size={32} />
                            </div>
                            <h3>Call Us</h3>
                            <a href="tel:0799770962" className="contact-link">079 977 0962</a>
                            <p>For reservations or takeout orders</p>
                        </div>

                        <div className="contact-card glass-panel">
                            <div className="icon-wrapper">
                                <Clock size={32} />
                            </div>
                            <h3>Trading Hours</h3>
                            <div className="hours-list">
                                <div className="hours-row"><span>Mon - Sat</span><span>07:00 - 17:00</span></div>
                                <div className="hours-row"><span>Sun & Public Holidays</span><span>08:00 - 15:00</span></div>
                            </div>
                        </div>

                        <div className="contact-card glass-panel full-width">
                            <div className="icon-wrapper">
                                <MapPin size={32} />
                            </div>
                            <h3>Location</h3>
                            <p className="address mb-4">
                                48 Ontdekkers Road<br />
                                Helderkruin, Roodepoort
                            </p>
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.536761895697!2d27.868019976375084!3d-26.146680461622325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959ec258e727c9%3A0xc6cbfaafe0a21ab3!2s48%20Ontdekkers%20Rd%2C%20Helderkruin%2C%20Roodepoort%2C%201724%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1708104523912!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Coffee Time Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Social Proof Placeholder */}
            <section ref={instaRef} className={`social-section container text-center fade-up ${isInstaVisible ? 'visible' : ''}`}>
                <div className="section-badge center">Follow Us</div>
                <h2><Camera className="inline-icon" size={32} style={{ display: 'inline', marginRight: '10px', verticalAlign: 'middle', color: 'var(--color-primary)' }} />@coffeetime_roodepoort</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>Tag us in your photos to be featured on our page!</p>
            </section>
        </main>
    );
};

export default Home;
