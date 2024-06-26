import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faHeadset } from '@fortawesome/free-solid-svg-icons';


const CustomerSupport = () => {
  return (
    <footer className="customerSupport">
      <div className="cs-columns">
        <div className="cs-column">
          <h3>Company Information</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>News & Press</li>
            <li>Investor Relations</li>
            <li>ESG</li>
            <li>Distribution Centers</li>
          </ul>
        </div>
        <div className="cs-column">
          <h3>Customer Support</h3>
          <ul>
            <li>Help Center</li>
            <li>My Account</li>
            <li>My Order</li>
            <li>Track My Order</li>
            <li>Shipping & Returns</li>
            <li>Apply For Credit</li>
            <li>International Sales</li>
            <li>Sales Tax Info</li>
            <li>W-9 Form</li>
            <li>Catalog</li>
            <li>Product Recall / Safety Info</li>
          </ul>
        </div>
        <div className="cs-column">
          <h3>Services</h3>
          <ul>
            <li>Extended Service Plan</li>
            <li>Limited Warranty Information</li>
            <li>Affiliate Program</li>
            <li>Government Sales</li>
            <li>Resellers</li>
            <li>Become A Supplier</li>
            <li>Safety Services</li>
            <li>Subject Matter Experts</li>
            <li>Territory Sales Manager</li>
            <li>Accessibility Options</li>
            <li>eProcurement</li>
          </ul>
        </div>
        <div className="cs-column">
          <h3>More Ways To Shop</h3>
          <ul>
            <li>Inventory Clearance</li>
            <li>Free Shipping</li>
            <li>New Products</li>
            <li>Industrial How-Tos</li>
          </ul>
        </div>
        <div className="cs-column">
          <h3>Need Help? Contact us</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon = {faHeadset} className='icon'/>Live Chat
            </li>
            <li>
              <FontAwesomeIcon icon = {faEnvelope} className='icon'/>Email Us
            </li>
            <li>
              <FontAwesomeIcon icon = {faPhoneVolume} className='icon'/> Call: 1.888.978.7759
            </li>
              
          </ul>
        </div>
      </div>
      
      <div className="cs-newsletter">
        <p>Be the first one to know about special deals & events</p>
        <input type="email" placeholder="Enter your email for newsletter" />
        <button>→</button>
      </div>
    </footer>
  );
};

export default CustomerSupport;
