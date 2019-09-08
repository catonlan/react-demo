import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './routertest/example'
import Parameters from './routertest/Parameters'
import RedienTend from './routertest/Redirects'
import CustomLink from './routertest/CustomLink'
import Preventing from './routertest/Preventing'
import Index from './routertest/index'


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
        <hr/>
        <Preventing></Preventing>
      </header>
      <div className="my-tboy">
        <Index></Index>
      </div>
    </div>
  );
}

export default App;
