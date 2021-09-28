
import './App.css';
import React from 'react';

import Navbar  from './components/Navbar';
import Release from './components/Release';

function App() {
  return (
    <div className="container my-3">
      <Navbar/>
      <Release/>

    </div>
  );
}

export default App;
