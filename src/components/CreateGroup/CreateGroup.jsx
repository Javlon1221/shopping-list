import React, { useState, useEffect } from 'react';
import './createGroup.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [groupPassword, setGroupPassword] = useState('');
  const [groupList, setGroupList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroupList(savedGroups);
  }, []);

  const handleCreateGroup = () => {
    if (groupName.trim() && groupPassword.trim()) {
      const newGroup = {
        name: groupName.trim(),
        password: groupPassword.trim()
      };

      const updatedGroups = [...groupList, newGroup];
      localStorage.setItem('groups', JSON.stringify(updatedGroups));
      setGroupList(updatedGroups);

      toast.success(`"${groupName}" guruhi yaratildi!`);
      setGroupName('');
      setGroupPassword('');

      setTimeout(() => navigate('/'), 1500);
    } else {
      toast.error("Iltimos, barcha maydonlarni to'ldiring.");
    }
  };

  return (
    <motion.div
      className="create-group-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <ToastContainer position="top-right" autoClose={2000} />

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Yangi Guruh Yaratish
      </motion.h2>

      <motion.input
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        whileFocus={{ scale: 1.03 }}
      />
      <motion.input
        type="password"
        placeholder="Password"
        value={groupPassword}
        onChange={(e) => setGroupPassword(e.target.value)}
        whileFocus={{ scale: 1.03 }}
      />
      <motion.button
        onClick={handleCreateGroup}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Create Group
      </motion.button>
    </motion.div>
  );
};

export default CreateGroup;
