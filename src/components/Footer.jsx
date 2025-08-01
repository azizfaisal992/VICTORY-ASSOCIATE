import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Victory Associate</h3>
            <p>
              Leading manpower recruitment service provider since 2018, 
              connecting skilled professionals with opportunities in the Middle East.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>Visa Processing & Stamping</li>
              <li>Police Clearance</li>
              <li>Medical Testing</li>
              <li>Flight Ticketing</li>
              <li>Pre-departure Training</li>
              <li>Document Attestation</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Destinations</h4>
            <ul>
              <li>Saudi Arabia</li>
              <li>Kuwait</li>
              <li>Qatar</li>
              <li>UAE</li>
              <li>Malaysia</li>
              <li>Maldives</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Building no 123 Level 3, Shahid Syed Nazrul Islam Sharani, Bijoy Nagar Road, Dhaka 1000</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+880-1234-567890</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>info@victoryassociate.com</span>
            </div>
            <div className="contact-item">
              <Clock size={16} />
              <span>Open 6 days (Friday Off)</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Victory Associate. All rights reserved.</p>
          <p>Trusted Manpower Recruitment Services Since 2018</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;