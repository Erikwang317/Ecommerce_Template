import React from 'react';
import './styles.css'
import searchBackgroundImage from '../images/searchBackground.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGlobe, faCamera } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="header-container">
      <img src={searchBackgroundImage} alt="Alibaba background" className="backgroundImage"/>
      <div className="top-bar">
        <div className='logoContainer'>
          <img src="/logo.png" alt="Logo" className='headerLogo' />
        </div>
        <div className='top-bar-right'>
          <p>Deliver to: US</p>
          <FontAwesomeIcon icon={faGlobe} className='header-icon'/>
          <p>Language: English-USD</p>
          <FontAwesomeIcon icon={faUser} className='header-icon'/>
          <p>Sign in</p>
          <button href="#" className="sign-up-btn">Sign Up</button>
        </div>
      </div>
      <div className='sub-header'>
        <div>
          <p>All categories</p>
          <p>Featured selections</p>
          <p>Trade Assurance</p>
        </div>
        <div>
          <p>Buyer Central</p>
          <p>Help Center</p>
          <p>Get the app</p>
          <p>Become a supplier</p>
        </div>

      </div>
      <div className='header-content'>
        <div className='search-title-container'>
          <h1>Learn about Venream.com</h1>
          <p>The leading B2B ecommerce platform for</p>
          <p> global trade</p>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search for products, brands and more" className="search-input"/>
          <FontAwesomeIcon icon={faCamera} className="faCamera"/>
          <button className="search-button">Search</button>
        </div>
        <div className="frequently-searched">
          <span>Frequently searched:</span>
          <button className="frequently-searched-btn">electric scooter</button>
          <button className="frequently-searched-btn">iphones 15 pro max</button>
          <button className="frequently-searched-btn">bubble house</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

