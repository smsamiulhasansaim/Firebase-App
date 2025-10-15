import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faRocket, 
  faLaptopCode,
  faDownload,
  faArrowRight,
  faStar,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const downloadCV = () => {
    // Add your CV download link here
    const cvUrl = '/cv-samiul-hasan.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Samiul_Hasan_CV.pdf';
    link.click();
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Background Elements */}
        <div className="hero-bg-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
        </div>

        <div className="hero-content">
          {/* Left Side - Text Content */}
          <div className="hero-text">
            <div className="hero-badge">
              <FontAwesomeIcon icon={faStar} className="badge-icon" />
              <span>Full Stack Developer</span>
            </div>

            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Samiul Hasan</span>
            </h1>
            
            <h2 className="hero-subtitle">
              I Create <span className="typing-text">Beautiful Websites</span>
            </h2>
            
            <p className="hero-description">
              Passionate Full Stack Developer specializing in modern web technologies. 
              I build responsive, user-friendly applications with cutting-edge tools 
              and best practices. Let's bring your ideas to life!
            </p>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">40+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <span>View My Work</span>
                <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
              </button>
              
              <button className="btn btn-secondary" onClick={downloadCV}>
                <FontAwesomeIcon icon={faDownload} className="btn-icon" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-social">
              <span className="social-label">Follow me:</span>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Illustration */}
          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-image">
                {/* Add your image here */}
                <div className="image-placeholder">
                  <FontAwesomeIcon icon={faLaptopCode} className="placeholder-icon" />
                </div>
                
                {/* Floating Elements */}
                <div className="floating-element element-1">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className="floating-element element-2">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <div className="floating-element element-3">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
              </div>
              
              <div className="profile-badge">
                <div className="badge-content">
                  <span className="badge-text">Available for work</span>
                  <div className="status-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;