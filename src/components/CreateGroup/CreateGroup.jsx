import React, { useState } from 'react';

const CreateGroup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (name && password) {
      alert(`Guruh yaratildi!\nNomi: ${name}\nParol: ${password}`);
      setName('');
      setPassword('');
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
    }
  };

  return (
    <div>
      <h2>Yangi Guruh Yaratish</h2>
      <input
        type="text"
        placeholder="Guruh nomi"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleSubmit}>Yaratish</button>
    </div>
  );
};

export default CreateGroup;
