import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faTag, 
  faSignInAlt, 
  faUserCircle 
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Side - Name */}
        <div className="navbar-left">
          <span className="navbar-name">S M SAMIUL HASAN</span>
        </div>

        {/* Center - Navigation Links */}
        <div className="navbar-center">
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faHome} className="nav-icon" />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faUser} className="nav-icon" />
                <span>About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/price" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faTag} className="nav-icon" />
                <span>Price</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/Login" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faSignInAlt} className="nav-icon" />
                <span>Login</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side - Account */}
        <div className="navbar-right">
          <NavLink 
            to="/account" 
            className={({ isActive }) => isActive ? "account-link active" : "account-link"}
          >
            <FontAwesomeIcon icon={faUserCircle} className="account-icon" />
            <span>Account</span>
          </NavLink>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;