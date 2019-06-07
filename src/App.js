import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.js'
import Campus from './components/Campus'

function App() {
  return (
    <div className="App">
        <Nav/>
        <Campus/>
    </div>
  );
}

export default App;