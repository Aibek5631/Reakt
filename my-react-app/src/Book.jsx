import React, { useState } from 'react';
import axios from 'axios';

function LoginPage({ onLoginSuccess }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { name, password });
      if (response.data.success) {
        onLoginSuccess(response.data.user);
      } else {
        alert("Ошибка входа");
      }
    } catch (error) {
      alert("Ошибка сервера");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Войти</button>
    </form>
  );
}

export default LoginPage;
