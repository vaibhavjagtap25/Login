

import React from 'react';

const Home = ({ onLogout }) => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
    
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
