import React, { useState } from 'react';
import './Page404.css'

const Page404 = () => {
  const [isDancing, setIsDancing] = useState(false);
  const [confetti, setConfetti] = useState([]);

  // Create confetti effect
  const createConfetti = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const newConfetti = [];
    
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360
      });
    }
    
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 3000);
  };

  // Navigation functions
  const goHome = () => {
    createConfetti();
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  const goBack = () => {
    createConfetti();
    setTimeout(() => {
      window.history.back();
    }, 1000);
  };

  const doTheDance = () => {
    createConfetti();
    setIsDancing(true);
    
    setTimeout(() => {
      setIsDancing(false);
    }, 2000);
  };

  // Background emojis
  const emojis = ['🚀', '👾', '🐱', '👻', '🐒', '🦄', '🍕', '🎉'];

  return (
    <div className="error-page">
      {/* Confetti */}
      <div className="confetti-container">
        {confetti.map(particle => (
          <div
            key={particle.id}
            className="confetti-particle"
            style={{
              left: `${particle.left}vw`,
              top: `${particle.top}vh`,
              backgroundColor: particle.color,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transform: `rotate(${particle.rotation}deg)`
            }}
          />
        ))}
      </div>

      {/* Background Emojis */}
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="bg-emoji"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Dancing Emoji */}
      {isDancing && (
        <div className="dancing-emoji">
          💃
        </div>
      )}

      {/* Main Content */}
      <div className="error-container">
        <div className="error-content">
          <div className="text-center">
            {/* Funny illustration */}
            <div className="emoji-container">
              <div className="emoji-main animate-bounce">🤔</div>
              <div className="emoji-question animate-wiggle">❓</div>
              <div className="emoji-poop animate-float">💩</div>
            </div>
            
            <h1 className="error-code">404</h1>
            <h2 className="error-title">
              OOPS! PAGE WENT ON VACATION!
            </h2>
            
            <div className="error-message">
              <p className="message-text">
                <span className="alert-text">Alert!</span> This page has escaped from our website! 
                It was last seen running away with the footer and a navigation button.
              </p>
              <p className="message-text">
                Our highly trained monkeys are searching for it, but in the meantime...
              </p>
            </div>
            
            <div className="button-container">
              <button 
                onClick={goHome}
                className="action-btn home-btn"
              >
                <span className="btn-icon">🏠</span> Send Me Home!
              </button>
              <button 
                onClick={goBack}
                className="action-btn back-btn"
              >
                <span className="btn-icon">↩️</span> Take Me Back!
              </button>
              <button 
                onClick={doTheDance}
                className="action-btn dance-btn"
              >
                <span className="btn-icon">💃</span> Do The 404 Dance!
              </button>
            </div>
            
            <div className="fun-facts">
              <p className="facts-title">While you're here, enjoy these fun facts:</p>
              <ul className="facts-list">
                <li>404 is the area code for Atlanta, Georgia</li>
                <li>This error is more common than finding matching socks</li>
                <li>You're officially lost in cyberspace! 🚀</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="error-footer">
          <p className="footer-text">
            <span className="footer-icon">🐱</span>
            Made with ❤️ and too much coffee 
            <span className="footer-icon">☕</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page404;