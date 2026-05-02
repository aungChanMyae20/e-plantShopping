import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-6 welcome-content">
                <div>
                  <h1>Welcome To Paradise Nursery</h1>
                  <div className="divider"></div>
                  <p>Where Green Meets Serenity</p>
                </div>
                <button
                  className="get-started-button"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </button>
              </div>
              <div className="col-6">
                <div className="aboutus_container">
                  <AboutUs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`product-list-container ${showProductList ? 'visible' : ''}`}
      >
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default App;
