import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactRouter from './components/ReactRouter'
import ReactStart from './components/ReactStart'
import ReactRedux from './components/ReactRedux'
class App extends Component {
  render() {
    return (

            <div className="app">
              <header className="app-header">
                {/*<img src={logo} classyName="app-logo" alt="logo" />*/}
                <h1 className="app-title">Welcome to React</h1>
              </header>
              {/*
              <p className="app-intro">
                To get started, edit <code>src/app.js</code> and save to reload.
              </p>
              */}
              {/*<ReactStart/>*/}
              {/*<ReactRouter/>*/}
              <ReactRedux/>
            </div>
    );
  }
}

export default App;
