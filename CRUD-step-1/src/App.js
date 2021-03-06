import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CRUD Operations in REACT / REDUX</h2>
        </div>
        <p className="App-intro">
          <Link to="/games">Games</Link>
        </p>
      </div>
    );
  }
}

export default App;
