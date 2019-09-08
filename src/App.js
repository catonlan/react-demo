import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './routertest/example'
import Parameters from './routertest/Parameters'
import RedienTend from './routertest/Redirects'
import CustomLink from './routertest/CustomLink'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Example></Example>
        <br/>
        <hr/>
        <Parameters></Parameters>
        <hr/>
        <RedienTend></RedienTend>
        <hr/>
        <CustomLink></CustomLink>
      </header>
    </div>
  );
}

export default App;
