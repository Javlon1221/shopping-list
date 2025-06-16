// Register.jsx
import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hozircha oddiy token yozamiz (real loyihada serverga yuboriladi)
    if (form.name && form.username && form.password) {
      localStorage.setItem('token', 'user_token');
      navigate('/'); 
    } else {
      alert('Iltimos, barcha maydonlarni to‘ldiring.');
    }
  };

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
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Eshmatjon"
              value={form.name}
              onChange={handleChange}
            />

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

            <button className="btn-auth" type="submit">Sign Up</button>
          </form>
          <p className="auth-switch">
            Already have an account? <Link to="/login">Log In.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
