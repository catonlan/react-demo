import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import PostList from './PostList';
import PostList2 from './PostList2';
import PostList3 from './PostList3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello nickname="rrrr"></Hello>
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
        </a>
        <h4>PostList 例子</h4>
        <PostList></PostList>
        <hr />
        <h4>PostList2 例子</h4>
        <PostList2></PostList2>
        <hr />
        <h4>PostList3 例子</h4>
        <PostList3></PostList3>
        <hr />
      </header>
    </div>
  );
}

export default App;
