import React, { useEffect, useState } from 'react';
import './profile.css';
import { FaTrashAlt, FaRegCopy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    } else {
      setUsername('No username');
    }
  }, []);

  const handleCopyUsername = () => {
    if (username !== 'No username') {
      navigator.clipboard.writeText(username)
        .then(() => {
          toast.success('Username nusxalandi!');
        })
        .catch(() => {
          toast.error('Nusxalashda xatolik yuz berdi.');
        });
    } else {
      toast.warning("Username mavjud emas.");
    }
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Rostdan ham hisobingizni o‘chirmoqchimisiz?");
    if (confirmDelete) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('user'); 

      toast.success("Hisob o‘chirildi, login sahifasiga yo‘naltirilmoqda...");
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <div className="profile-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="profile-header">
        <h1>Your Profile</h1>
        <div className="profile-actions">
          <button className="btn btn-copy" onClick={handleCopyUsername}>
            <FaRegCopy style={{ marginRight: '6px' }} />
            Copy Username
          </button>
          <button className="btn btn-delete" onClick={handleDeleteAccount}>
            <FaTrashAlt style={{ marginRight: '6px' }} />
            Delete Account
          </button>
        </div>
      </div>

      <div className="profile-main">
        <div className="profile-avatar">{username?.charAt(0).toUpperCase()}</div>
        <div className="profile-info">
          <h2>{username} <span className="active-badge">Active</span></h2>
          <p>{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
