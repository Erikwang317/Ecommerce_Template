import React from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className='header'>
      <div className='logoContainer'>
        <img src="/logo.png" alt="Logo" className='headerLogo' />
      </div>
      <nav>
        <ul className='headerNav'>
          <li className='headerNavItem'><a href="/">Home</a></li>
          <li className='headerNavItem'><a href="/shop">Shop</a></li>
          <li className='headerNavItem'><a href="/deal">Deals</a></li>
          <li className='headerNavItem'><a href="/about">About us</a></li>
          <li className='headerNavItem'><a href="/contact">Contact us</a></li>
        </ul>
      </nav>
      <div className='headerSearch'>
        <input type="text" placeholder="Enter a keyword or part but " className='headerSearchInput'/>
        <button type="button" className='headerCart'>🔍</button>
      </div>
      <div className='signin'>
        <FontAwesomeIcon icon={faUser} />
        <p>Sign in/Register</p>
      </div>
      <button type="button" className='headerCart'>🛒</button>
     
    </header>
  );
};

export default Header;
