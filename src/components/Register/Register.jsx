// Register.jsx
import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-logo">🔵</div>
          <p>Welcome to</p>
          <h1>Shopping List</h1>
        </div>
        <div className="auth-right">
          <h2>Register</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Eshmatjon" />

            <label>Username</label>
            <input type="text" placeholder="eshmatjon123" />

            <label>Password</label>
            <input type="password" placeholder="******" />

            <button className="btn-auth" type="submit">Sign Up</button>
          </form>
          <p className="auth-switch">Already have an account? <Link to="/login">Log In.</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
