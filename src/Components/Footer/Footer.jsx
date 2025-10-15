import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faHeart,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">S M SAMIUL HASAN</h3>
            <p className="footer-description">
              Full Stack Developer & UI/UX Designer. Creating beautiful and functional web experiences with modern technologies.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#ui-design">UI/UX Design</a></li>
              <li><a href="#mobile-app">Mobile Apps</a></li>
              <li><a href="#ecommerce">E-commerce</a></li>
              <li><a href="#seo">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span>samiul@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} S M SAMIUL HASAN. Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by EZ BID
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;