import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerLinks'>
        <a href="/faq">FAQ</a> | <a href="/contact">Contact Us</a>
      </div>
      <div className='footerSocialMedia'>
        <a href="https://facebook.com">Facebook</a> | <a href="https://twitter.com">Twitter</a> | <a href="https://youtube.com">YouTube</a>
      </div>
      <form className='subscribeForm'>
        <input type="email" placeholder="Subscribe to newsletter" />
        <button type="submit">Subscribe</button>
      </form>
    </footer>
  );
};

export default Footer;
