// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username && form.password) {
      
      localStorage.setItem('token', 'user_token');
      navigate('/');
    } else {
      alert("Iltimos, foydalanuvchi nomi va parolni to‘ldiring.");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="eshmatjon123"
              value={form.username}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="******"
              value={form.password}
              onChange={handleChange}
            />

            <button className="btn-auth" type="submit">Sign In</button>
          </form>
          <p className="auth-switch">
            No account yet? <Link to="/register">Create One.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
