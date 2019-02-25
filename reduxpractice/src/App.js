import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';


import Posts from './components/Posts';
import Postform from './components/Postform';
//import { applyMiddleware } from '../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';


import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to my react example!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github source
          </a>
        </header>
        <Postform />
        <hr />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
