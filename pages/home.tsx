import React from 'react';
import axios from 'axios';

export default function Home() {
  const getProfile = async () => {
    const response = await axios.get('/api/profile');
    console.log(response);
  };
  const logout = async () => {
    const response = await axios.post('/api/auth/logout');
    console.log(response);
  };
  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={getProfile}>
        get Profile
      </button>
      <button type="button" onClick={logout}>
        sing out
      </button>
    </div>
  );
}
