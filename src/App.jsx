import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/404/NotFound';
import Profile from './components/profile/Profile';
import CreateGroup from './components/CreateGroup/CreateGroup';

const isAuthenticated = localStorage.getItem('token');

const PrivateRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<h1>Welcome to Home</h1>} />
          <Route path="profile" element={<Profile />} />
          <Route path="create-group" element={<CreateGroup />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Catch-all for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
