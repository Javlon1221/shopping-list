import React, { useState, useEffect } from 'react';
import './header.css';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosNotificationsOutline, IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import Blogo from '../../photos/blogo.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${scrolling ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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

          <div className="navbar_itemch noti-container" title="Notifications">
            <IoIosNotificationsOutline />
            <span className="noti-dot" />
          </div>

          <button className="navbar_itemch" title="Settings">
            <IoMdSettings />
          </button>

          <button className="navbar_itemch" title="Logout" onClick={handleLogout}>
            <FiLogOut />
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title="Menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => navigate('/')}>🏠 Home</button>
          <button onClick={handleLogout}>🚪 Logout</button>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
