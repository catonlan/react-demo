import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import PostList from './PostList';
import PostList2 from './PostList2';
import PostList3 from './PostList3';
import PostList4 from './PostList4';
import MyComponent from './MyComponent';
import MyComponent2 from './MyConmponent2';
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';
import LongForm from './longform';
import SelectFrom from './SelectFrom';
import CheckFrom from './CheckFrom'
import Adp from './Adp';
import Admpp from './Admpp'
import UserListContainer from './UserListContainer'
import HiHeil from './Hiheil'
import UserListContainer2 from './UserListContainer2'
import UserListContainer3 from './UserListContainer3'
import Container from './Container'

import Nav from './component/nav'
import Goods from './page/goods'
import Welcome from './page/welcome'
import {Route} from 'react-router-dom'




const LIST = [
  {
    text:'welcome',
    url: '/welcome'
  },
  {
    text: 'goods',
    url: '/goods'
  }
];


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
        <MyComponent></MyComponent>
        <hr />
        <MyComponent2></MyComponent2>
        <hr />
        <MyComponent3></MyComponent3>
        <hr />
        <MyComponent4></MyComponent4>
        <br/>
        <hr />
         <LongForm></LongForm>
         <hr/>
         <SelectFrom></SelectFrom>
         <hr/>
         <CheckFrom></CheckFrom>
         <hr/>
        <PostList4></PostList4>
        <hr/>
        <Adp></Adp>
        <hr/>
        <Admpp></Admpp>
        <UserListContainer></UserListContainer>
        <hr/>
        <HiHeil></HiHeil>
        <hr/>
        <UserListContainer2></UserListContainer2>
        <hr/>
        <UserListContainer3></UserListContainer3>
        <hr/>
        <Container></Container>
      </header>
    <br/><br/>
    <div>
      <div className="nav_bar">
      <Nav list={LIST} />
    </div>

    <div className="conent">
      <Route path='/welcome' component={Welcome} />
      <Route path='/goods' component={Goods} />
    </div>

    </div>
    </div>
  );

  
}

export default App;
