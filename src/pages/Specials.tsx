import SEO from '../components/SEO';
import './Specials.css';

const Specials = () => {
    return (
        <main className="specials-page">
            <SEO title="Specials | Coffee Time" description="Check out our weekly specials including the famous Sunday Carvery." />
            
            <div className="specials-header">
                <div className="container text-center">
                    <div className="section-badge center">Limited Time Offers</div>
                    <h1 className="page-title">Weekly Specials</h1>
                    <p className="page-subtitle">Don't miss out on these delicious deals</p>
                </div>
            </div>

            <div className="container specials-container">
                <div className="specials-grid">
                    <div className="special-card glass-panel fade-up visible">
                        <div className="special-card-image sunday-carvery-img" role="img" aria-label="A delicious plate of traditional Sunday Carvery roast with beef, potatoes, and vegetables"></div>
                        <div className="special-card-content">
                            <div className="special-badge">Every Sunday</div>
                            <h2>The Famous Sunday Carvery</h2>
                            <p className="special-desc">
                                A family tradition returning every weekend. Slow-roasted perfection with all the classic trimmings. Booking is highly recommended!
                            </p>
                            <ul className="special-features">
                                <li><span>✓</span> Choice of 2 Slow-Roasted Meats</li>
                                <li><span>✓</span> 3 Farm-Fresh Seasonal Vegetables</li>
                                <li><span>✓</span> Crispy Golden Roasted Potatoes</li>
                                <li><span>✓</span> Traditional Rich Gravy</li>
                                <li><span>✓</span> A Decadent Pudding to finish</li>
                            </ul>
                            <div className="special-price">R140 <span>per person</span></div>
                            <div className="special-action">
                                <a href="tel:0799770962" className="btn btn-primary">Call to Book Now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Specials;
