// Footer.js

import React from "react";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logoAndSocial">
        <div className="footer-logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="footer-address">
          <p><b>Address:</b> 1234 Street Name, </p>
          <p>Mumbai Maharashtra, India</p>
          <p><b>Phone:</b> 9833128878</p>
          <p><b>Email:</b> lalakala@gmail.com
            <a href="mailto:lalakala@gmail.com">
            </a>
          </p>
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com/">
            <FaFacebook className="social-icon" />

          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter className="social-icon" />

          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="social-icon" />

          </a >
          <a href="https://www.youtube.com/">
            <FaYoutube className="social-icon" />

          </a>
        </div>
      </div>

      <div className="category">
        <h3>Categories</h3>
        <ul>
          <li>
            <a href="/category/1">Category 1</a>
          </li>
          <li>
            <a href="/category/2">Category 2</a>
          </li>
          <li>
            <a href="/category/3">Category 3</a>
          </li>
          <li>
            <a href="/category/4">Category 4</a>
          </li>
          <li>
            <a href="/category/5">Category 5</a>
          </li>
          </ul>
      </div>

      <div className="useful-links">
       <h3>Useful Links</h3>
        <nav className="footer-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter to get the latest updates</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

    </footer>
  );
};

export default Footer;
