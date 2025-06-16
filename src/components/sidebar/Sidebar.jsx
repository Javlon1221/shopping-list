import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { IoChatbubble } from "react-icons/io5";

const Sidebar = () => {
  const [showGroups, setShowGroups] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groupPassword, setGroupPassword] = useState('');

  const handleCreateGroup = () => {
    if (groupName.trim() && groupPassword.trim()) {
      alert(`Group created!\nName: ${groupName}\nPassword: ${groupPassword}`);
      setGroupName('');
      setGroupPassword('');
      setShowCreateForm(false);
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
    }
  };

  return (
    <div className="sidebar">
      <Link to="/profile" className="menu-item active">
        <span role="img" aria-label="user">👤</span> Profile
      </Link>

      <div className="menu-item" onClick={() => setShowGroups(!showGroups)}>
        <span role="img" aria-label="groups">
          <IoChatbubble />
        </span> Groups
        <span className="arrow">{showGroups ? '▲' : '▼'}</span>
      </div>

      {showGroups && (
        <div className="group-list">
          <div className="menu-item sub" onClick={() => setShowCreateForm(!showCreateForm)}>
            <span role="img" aria-label="plus">➕</span> Create Group
          </div>

          {showCreateForm && (
            <div className="create-form">
              <input
                type="text"
                placeholder="Group Name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={groupPassword}
                onChange={(e) => setGroupPassword(e.target.value)}
              />
              <button onClick={handleCreateGroup}>Create</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
