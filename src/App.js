
import './App.css';
import React from 'react';

import Navbar  from './components/Navbar';
import Release from './components/Release';
// import AudioBar from './components/AudioBar';

function App() {
  return (
    <div className="container my-3">
      <Navbar/>
      <Release/>
      {/* <AudioBar /> */}

    </div>
  );
}

export default App;
