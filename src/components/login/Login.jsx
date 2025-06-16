import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-logo">🔵</div>
          <p>Welcome back to</p>
          <h1>Shopping List</h1>
        </div>
        <div className="auth-right">
          <h2>Sign In</h2>
          <form>
            <label>Username</label>
            <input type="text" placeholder="eshmatjon123" />

            <label>Password</label>
            <input type="password" placeholder="******" />

            <button className="btn-auth" type="submit">Sign In</button>
          </form>
          <p className="auth-switch">No account yet? <Link to="/register">Create One.</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
