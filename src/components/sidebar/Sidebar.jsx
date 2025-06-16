import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { IoChatbubble } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa'; 

const Sidebar = () => {
  const [showGroups, setShowGroups] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroupList(savedGroups);
  }, []);

  return (
    <>
      <button className="menu-toggle" onClick={() => setShowSidebar(!showSidebar)}>
        <FaBars />
      </button>

      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <Link to="/profile" className="menu-item active" onClick={() => setShowSidebar(false)}>
          <span role="img" aria-label="user">👤</span> Profile
        </Link>

        <div className="menu-item" onClick={() => setShowGroups(!showGroups)}>
          <span className="icon">
            <IoChatbubble />
          </span> Groups
          <span className="arrow">{showGroups ? '▲' : '▼'}</span>
        </div>

        {showGroups && (
          <div className="group-list">
            <Link to="/create-group" className="menu-item sub" onClick={() => setShowSidebar(false)}>
              <span role="img" aria-label="plus">➕</span> Create Group
            </Link>

            {groupList.length > 0 && (
              <div className="created-groups">
                {groupList.map((group, idx) => (
                  <div key={idx} className="group-item">
                    📌 {group.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
