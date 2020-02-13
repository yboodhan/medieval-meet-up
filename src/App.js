import React from 'react';
import logo from './logo.svg';
import './App.css';

import Profile from './Components/Profile';
import NavBottom from './Components/NavBottom';

function App() {
  return (
    <div className="App">
      <Profile />
      <div className="nav-bar">
        <NavBottom />
      </div>
    </div>
  );
}

export default App;
