// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Profile from './components/profile/Profile';
import CreateGroup from './components/CreateGroup/CreateGroup';
import Login from './components/login/Login';
import Register from './components/Register/Register';
import Header from './components/header/Header'

const App = () => {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="create-group" element={<CreateGroup />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
