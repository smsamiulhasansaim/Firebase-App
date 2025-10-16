import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserPlus, 
  faUser, 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash, 
  faCheck,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGoogle, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration data:', formData);
  };

  const handleGoogleRegister = () => {
    console.log('Google registration');
  };

  const handleGithubRegister = () => {
    console.log('GitHub registration');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        {/* Header */}
        <div className="register-header">
          <div className="register-icon">
            <FontAwesomeIcon icon={faUserPlus} className="register-main-icon" />
          </div>
          <h1 className="register-title">Create Account</h1>
          <p className="register-subtitle">Join us today and get started</p>
        </div>

        {/* Social Registration Buttons */}
        <div className="social-register-section">
          <button 
            className="social-btn google-btn"
            onClick={handleGoogleRegister}
            type="button"
          >
            <FontAwesomeIcon icon={faGoogle} className="social-icon" />
            Sign up with Google
          </button>

          <button 
            className="social-btn github-btn"
            onClick={handleGithubRegister}
            type="button"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
            Sign up with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Registration Form */}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              <FontAwesomeIcon icon={faUser} className="form-icon" />
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <FontAwesomeIcon icon={faLock} className="form-icon" />
              Password
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="form-input"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon 
                  icon={showPassword ? faEyeSlash : faEye} 
                  className="toggle-icon" 
                />
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              <FontAwesomeIcon icon={faLock} className="form-icon" />
              Confirm Password
            </label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesomeIcon 
                  icon={showConfirmPassword ? faEyeSlash : faEye} 
                  className="toggle-icon" 
                />
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <span className="checkmark">
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              I agree to the <a href="#terms" className="terms-link">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="register-btn">
            <FontAwesomeIcon icon={faRocket} className="btn-icon" />
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="register-footer">
          <p>
            Already have an account? <a href="/login" className="login-link">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;