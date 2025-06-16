import React from 'react';
import './style.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Kechirasiz, sahifa topilmadi!</p>
      <a href="/" className="notfound-link">Bosh sahifaga qaytish</a>
    </div>
  );
}

export default NotFound;
