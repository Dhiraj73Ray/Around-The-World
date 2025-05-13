
import { Link } from 'react-router-dom';

import beachImg from '/images/Categories/beach.jpg';
import mountImg from '/images/Categories/mountains.jpg';
import histoImg from '/images/Categories/historical.jpg';
import underImg from '/images/Categories/underwater.jpg';
import skyImg from '/images/Categories/skyadv1.jpg';
import modImg from '/images/Categories/modern.jpg';

function Categories() {
    return (
        <div>
            <main className="categories-section">
                <h2 className="section-title">Explore by Category</h2>
                <div className="categories-grid">
                    <Link to="/catg/beaches" className="category-card">
                        <img src={beachImg} alt="Beaches" />
                        <h3>Beaches</h3>
                    </Link>
                    <Link to="/catg/mountains" className="category-card">
                        <img src={mountImg} alt="Mountains" />
                        <h3>Mountains</h3>
                    </Link>
                    <Link to="/catg/histories" className="category-card">
                        <img src={histoImg} alt="Historic Places" />
                        <h3>Historic</h3>
                    </Link>
                    <Link to="/catg/underwater" className="category-card">
                        <img src={underImg} alt="Underwater" />
                        <h3>Underwater</h3>
                    </Link>
                    <Link to="/catg/adventure" className="category-card">
                        <img src={skyImg} alt="Sky Adventures" />
                        <h3>Sky Adventures</h3>
                    </Link>
                    <Link to="/catg/modern" className="category-card">
                        <img src={modImg} alt="Modern Cities" />
                        <h3>Modern</h3>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Categories