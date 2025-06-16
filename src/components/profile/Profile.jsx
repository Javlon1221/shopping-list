import React from 'react';
import './profile.css';
import { FaTrashAlt, FaRegCopy } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Your Profile</h1>
        <div className="profile-actions">
          <button className="btn btn-copy">
            <FaRegCopy style={{ marginRight: '6px' }} />
            Copy Username
          </button>
          <button className="btn btn-delete">
            <FaTrashAlt style={{ marginRight: '6px' }} />
            Delete Account
          </button>
        </div>
      </div>

      <div className="profile-main">
        <div className="profile-avatar">J</div>
        <div className="profile-info">
          <h2>Javlonbek <span className="active-badge">Active</span></h2>
          <p>jalilov123</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
