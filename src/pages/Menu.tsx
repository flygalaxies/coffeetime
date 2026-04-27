import { useState } from 'react';
import { Download } from 'lucide-react';
import { menuItems, categories, type MenuCategory, type MenuItem } from '../data/menuItems';
import SEO from '../components/SEO';
import './Menu.css';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
    const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

    // Filter items based on selected category (if 'All', keep them grouped)
    const renderCategory = (categoryName: MenuCategory) => {
        if (categoryName === 'All') return null; // 'All' is not a real category of items
        
        const items = menuItems.filter(item => item.category === categoryName);
        if (items.length === 0) return null;

        return (
            <div key={categoryName} className="menu-category-section fade-up visible">
                <h2 className="menu-category-title">{categoryName}</h2>
                <div className="menu-items-grid">
                    {items.map((item: MenuItem) => (
                        <div key={item.id} className="menu-item-card glass-panel">
                            <div className="menu-item-header">
                                <h3 className="menu-item-name">
                                    {item.name}
                                    <div className="menu-item-badges">
                                        {item.isHot && <span className="badge badge-hot">Hot</span>}
                                        {item.isVegan && <span className="badge badge-vegan">V</span>}
                                    </div>
                                </h3>
                                <div className="menu-item-price">{item.price}</div>
                            </div>
                            {item.description && <p className="menu-item-description">{item.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <main className="menu-page">
            <SEO title="Menu | Coffee Time" description="Explore our delicious menu featuring everything from morning coffee and breakfast to fulfilling lunches and gourmet dinners." />
            
            <div className="menu-header">
                <div className="container text-center">
                    <div className="section-badge center">Delicious Offerings</div>
                    <h1 className="page-title">Our Menu</h1>
                    <p className="page-subtitle">Carefully crafted with the finest ingredients</p>
                    
                    <div className="menu-actions" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <div className="view-toggle">
                            <button 
                                className={`btn ${viewMode === 'interactive' ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setViewMode('interactive')}
                            >
                                Interactive Menu
                            </button>
                            <button 
                                className={`btn ${viewMode === 'pdf' ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setViewMode('pdf')}
                            >
                                PDF Viewer
                            </button>
                        </div>
                        
                        <a href="/menu.pdf" download="CoffeeTime_Menu.pdf" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <Download size={20} className="mr-2" style={{ marginRight: '0.5rem' }} />
                            Download PDF Menu
                        </a>
                    </div>
                </div>
            </div>

            <div className="menu-container container">
                {viewMode === 'interactive' ? (
                    <>
                        <div className="category-filter-bar">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                    aria-pressed={selectedCategory === category}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="menu-content">
                            {selectedCategory === 'All' 
                                ? categories.map(cat => renderCategory(cat))
                                : renderCategory(selectedCategory)
                            }
                        </div>
                    </>
                ) : (
                    <div className="pdf-viewer-container glass-panel fade-up visible" style={{ height: '80vh', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', padding: '0.5rem' }}>
                        <iframe 
                            src="/menu.pdf" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 'none', borderRadius: 'var(--radius-md)', backgroundColor: '#fff' }} 
                            title="Coffee Time Menu PDF"
                        >
                            <p>It appears your browser does not support PDFs. <a href="/menu.pdf">Download the PDF</a> to view it.</p>
                        </iframe>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Menu;
