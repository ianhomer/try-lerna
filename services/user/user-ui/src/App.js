import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CallBackend} from "./CallBackend"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>User Service</p>
        <CallBackend/>
      </header>
    </div>
  );
}

export default App;
