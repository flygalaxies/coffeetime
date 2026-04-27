import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingAction from './components/FloatingAction';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Specials from './pages/Specials';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/specials" element={<Specials />} />
                    </Routes>
                </main>
                <Footer />
                <FloatingAction />
                <BackToTop />
            </div>
        </Router>
    );
}

export default App;
