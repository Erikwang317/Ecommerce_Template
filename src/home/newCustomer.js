import React from 'react'; 
import newCustomerImage from '../images/newCustomer.jpg';

const NewCustomer = () => {
  return (
    <div className="new-customer-container">
      <div className="new-customer-registration">
        <h2>New customer?</h2>
        <p>Register now. It is fast and easy.</p>
        <p>Sign in for a personalized experience</p>
        <div className="new-customer-actions">
          <button className="sign-in-btn">Sign in</button>
          <button className="start-here-btn">Start here</button>
        </div>
      </div>
      <div className="vertical-divider"></div>
      <div className="new-customer-benefits">
        <h2>Account Benefits:</h2>
        <ul>
          <li>Enjoy a faster and more personalized checkout</li>
          <li>Manage your payment preferences, returns, & cancellations</li>
          <li>View your order history with easy order tracking</li>
          <li>Create and manage multiple order lists, auto re-orders, & subscriptions</li>
          <li>Get insights into savings and spending anytime</li>
          <li>Receive more personalized product recommendations</li>
          <li>Manage your communication preferences</li>
          <li>Convert your quote to an order</li>
        </ul>
      </div>
      <div className="new-customer-image">
        <img src={newCustomerImage} alt="Engaging Visual" />
      </div>
    </div>
  );
};

export default NewCustomer;
