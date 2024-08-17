import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div >
          <Link to="/" className="footer-logo"><h1><b>Chef AI</b></h1> </Link>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
