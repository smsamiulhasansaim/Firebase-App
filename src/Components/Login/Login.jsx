import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  sendEmailVerification
} from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Firebase Email/Password Login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Check if email is verified ONLY for custom email/password login
      if (!user.emailVerified) {
        // Send verification email again
        await sendEmailVerification(user);
        
        // Sign out the user since email is not verified
        await auth.signOut();
        
        setError('Please verify your email address before logging in. A new verification email has been sent to your inbox.');
        toast.warning(
          `Please verify your email address. A new verification email has been sent to ${email}.`,
          {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        setLoading(false);
        return;
      }

      console.log('Login successful:', user);
      
      // Show success message
      toast.success('Login successful! Redirecting...', {
        position: "top-right",
        autoClose: 3000,
      });

      // Redirect to external website after successful login
      setTimeout(() => {
        window.location.href = 'https://codenovabd.com';
      }, 2000);
      
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = 'Login failed. Please try again.';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
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

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      console.log('Google login successful:', user);
      
      toast.success('Google login successful! Redirecting...', {
        position: "top-right",
        autoClose: 3000,
      });

      // Redirect directly for Google sign-in (no verification needed)
      setTimeout(() => {
        window.location.href = 'https://codenovabd.com';
      }, 2000);
      
    } catch (error) {
      console.error('Google login error:', error);
      setError('Google login failed. Please try again.');
      toast.error('Google login failed. Please try again.', {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const provider = new GithubAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      console.log('GitHub login successful:', user);
      
      toast.success('GitHub login successful! Redirecting...', {
        position: "top-right",
        autoClose: 3000,
      });

      // Redirect directly for GitHub sign-in (no verification needed)
      setTimeout(() => {
        window.location.href = 'https://codenovabd.com';
      }, 2000);
      
    } catch (error) {
      console.error('GitHub login error:', error);
      setError('GitHub login failed. Please try again.');
      toast.error('GitHub login failed. Please try again.', {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    if (!email) {
      toast.error('Please enter your email address first.', {
        position: "top-right",
      });
      return;
    }

    try {
      // We need to sign in temporarily to send verification
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await sendEmailVerification(user);
      await auth.signOut(); // Sign out after sending verification
      
      toast.success(`Verification email sent to ${email}. Please check your inbox.`, {
        position: "top-right",
        autoClose: 6000,
      });
    } catch (error) {
      toast.error('Failed to send verification email. Please try again.', {
        position: "top-right",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            {error}
            {error.includes('verify your email') && (
              <div style={{ marginTop: '10px' }}>
                <button 
                  onClick={handleResendVerification}
                  style={{
                    background: 'transparent',
                    border: '1px solid #667eea',
                    color: '#667eea',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Resend Verification Email
                </button>
              </div>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Signing you in...</p>
          </div>
        )}

        {!loading && (
          <>
            {/* Social Login Buttons */}
            <div className="social-login-section">
              <button 
                className="social-btn google-btn"
                onClick={handleGoogleLogin}
                type="button"
                disabled={loading}
              >
                <FontAwesomeIcon icon={faGoogle} className="social-icon" />
                Continue with Google
              </button>

              <button 
                className="social-btn github-btn"
                onClick={handleGithubLogin}
                type="button"
                disabled={loading}
              >
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
                Continue with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="divider">
              <span>OR</span>
            </div>

            {/* Email/Password Form */}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
                <div className="password-label-container">
                  <a href="#forgot" className="forgot-link">Forgot password?</a>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={loading}
                  />
                  <span className="checkmark"></span>
                  Remember me
                </label>
              </div>

              <button 
                type="submit" 
                className="login-btn"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            {/* Email Verification Notice - Only for custom login */}
            <div style={{ 
              background: '#f0f8ff', 
              border: '1px solid #667eea', 
              borderRadius: '8px', 
              padding: '12px', 
              marginTop: '16px',
              fontSize: '14px',
              color: '#666',
              textAlign: 'center'
            }}>
              🔐 For email/password login: Verify your email address before logging in.
            </div>

            {/* Footer */}
            <div className="login-footer">
              <p>
                Don't have an account? <Link to="/Register" className="signup-link">Sign up</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
