import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import './App.css';

import Content from './Components/Content'


function App() {
  return (
    <div className="App">
      <main>
        <Content />
      </main>
    </div>
  );
}

export default App;
