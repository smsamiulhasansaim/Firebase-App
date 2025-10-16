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
import { 
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  sendEmailVerification
} from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password should be at least 6 characters');
      setLoading(false);
      return;
    }

    if (!formData.agreeTerms) {
      setError('Please agree to the Terms & Conditions');
      setLoading(false);
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );

      // Update user profile with full name
      await updateProfile(userCredential.user, {
        displayName: formData.fullName
      });

      // Send email verification ONLY for custom registration
      await sendEmailVerification(userCredential.user);

      console.log('User registered successfully:', userCredential.user);
      
      // Show success message with email verification info
      toast.success(
        `Registration successful! Verification email sent to ${formData.email}. Please verify your email before logging in.`,
        {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      });

    } catch (error) {
      console.error('Registration error:', error);
      let errorMessage = 'Registration failed. Please try again.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection.';
          break;
        default:
          errorMessage = error.message;
      }
      
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('Google registration successful:', result.user);
      
      // Google authentication doesn't need email verification
      toast.success('Google registration successful!', {
        position: "top-right",
        autoClose: 3000,
      });

      // Redirect directly for Google sign-in
      setTimeout(() => {
        window.location.href = 'https://codenovabd.com';
      }, 2000);
      
    } catch (error) {
      console.error('Google registration error:', error);
      setError('Google registration failed. Please try again.');
      toast.error('Google registration failed. Please try again.', {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGithubRegister = async () => {
    setLoading(true);
    setError('');

    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('GitHub registration successful:', result.user);
      
      // GitHub authentication doesn't need email verification
      toast.success('GitHub registration successful!', {
        position: "top-right",
        autoClose: 3000,
      });

      // Redirect directly for GitHub sign-in
      setTimeout(() => {
        window.location.href = 'https://codenovabd.com';
      }, 2000);
      
    } catch (error) {
      console.error('GitHub registration error:', error);
      setError('GitHub registration failed. Please try again.');
      toast.error('GitHub registration failed. Please try again.', {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
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

        {/* Error Message */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Creating your account...</p>
          </div>
        )}

        {!loading && (
          <>
            {/* Social Registration Buttons */}
            <div className="social-register-section">
              <button 
                className="social-btn google-btn"
                onClick={handleGoogleRegister}
                type="button"
                disabled={loading}
              >
                <FontAwesomeIcon icon={faGoogle} className="social-icon" />
                Sign up with Google
              </button>

              <button 
                className="social-btn github-btn"
                onClick={handleGithubRegister}
                type="button"
                disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                    placeholder="Create a password (min. 6 characters)"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
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
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={loading}
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
                    disabled={loading}
                  />
                  <span className="checkmark">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </span>
                  I agree to the <a href="#terms" className="terms-link">Terms & Conditions</a>
                </label>
              </div>

              <button 
                type="submit" 
                className="register-btn"
                disabled={loading}
              >
                <FontAwesomeIcon icon={faRocket} className="btn-icon" />
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            {/* Email Verification Info - Only show for custom registration */}
            <div className="verification-info">
              <p style={{ fontSize: '14px', color: '#666', textAlign: 'center', marginTop: '16px' }}>
                📧 After registration, please check your email for verification link. You must verify your email before logging in.
              </p>
            </div>

            {/* Footer */}
            <div className="register-footer">
              <p>
                Already have an account? <a href="/login" className="login-link">Sign in</a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
