import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSignOutAlt, 
  faUser,
  faCog,
  faTimes,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import './Logout.css';

const Logout = ({ user = { name: 'John Doe', email: 'john@example.com' }, onLogout, onCancel }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmLogout = async () => {
    setIsLoggingOut(true);
    
    // Simulate logout process
    setTimeout(() => {
      setIsLoggingOut(false);
      setShowConfirm(false);
      if (onLogout) {
        onLogout();
      }
    }, 1500);
  };

  const handleCancel = () => {
    setShowConfirm(false);
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <>
      {/* Main Logout Button */}
      <div className="logout-container">
        <button 
          className="logout-btn"
          onClick={handleLogoutClick}
          disabled={isLoggingOut}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
          <span>Logout</span>
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <div className="modal-header">
              <div className="modal-icon">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </div>
              <h3>Confirm Logout</h3>
              <button className="close-btn" onClick={handleCancel}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="modal-body">
              <div className="user-info">
                <div className="user-avatar">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="user-details">
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
              </div>
              
              <p className="logout-message">
                Are you sure you want to logout? You'll need to sign in again to access your account.
              </p>
            </div>

            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={handleCancel}
                disabled={isLoggingOut}
              >
                Cancel
              </button>
              <button 
                className="confirm-logout-btn"
                onClick={handleConfirmLogout}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? (
                  <>
                    <div className="loading-spinner"></div>
                    Logging out...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCheck} />
                    Yes, Logout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {isLoggingOut && (
        <div className="logout-toast">
          <div className="toast-content">
            <FontAwesomeIcon icon={faSignOutAlt} className="toast-icon" />
            <span>Logging you out securely...</span>
          </div>
        </div>
      )}
    </>
  );
};

// User Profile Dropdown with Logout (Optional)
export const UserProfileDropdown = ({ user, onLogout, onProfileClick, onSettingsClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="user-dropdown">
      <button 
        className="user-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="user-avatar-sm">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <span className="user-name">{user?.name?.split(' ')[0]}</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <div className="user-avatar-md">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="user-info-sm">
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          </div>

          <div className="dropdown-divider"></div>

          <button className="dropdown-item" onClick={onProfileClick}>
            <FontAwesomeIcon icon={faUser} />
            <span>My Profile</span>
          </button>

          <button className="dropdown-item" onClick={onSettingsClick}>
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </button>

          <div className="dropdown-divider"></div>

          <Logout user={user} onLogout={onLogout} onCancel={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Logout;