import React from 'react';
import './header.css';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosNotificationsOutline, IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Blogo from '../../photos/blogo.png'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar_logo">
          <img
            src={Blogo}
            alt="App Logo"
            className="logo"
            onClick={() => navigate('/')}
          />
          <button className="navbar_button">+ New</button>
        </div>

        <form className="navbar_form">
          <input
            type="text"
            className="navbar_inputSearch"
            placeholder="Search group and join"
          />
        </form>

        <div className="navbar_item">
          <button className="navbar_itemch" title="Sync">
            <AiOutlineLoading3Quarters />
          </button>
          <button className="navbar_itemch" title="Notifications">
            <IoIosNotificationsOutline />
          </button>
          <button className="navbar_itemch" title="Settings">
            <IoMdSettings />
          </button>
          <button className="navbar_itemch" title="Logout" onClick={handleLogout}>
            <FiLogOut />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
