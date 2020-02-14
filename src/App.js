import React from 'react';
import './App.css';

import Content from './Components/Content'
import NavBottom from './Components/NavBottom';

function App() {
  return (
    <div className="App">
      <main>
        <Content />
      </main>
      <div className="nav-bar">
        <NavBottom />
      </div>
    </div>
  );
}

export default App;
