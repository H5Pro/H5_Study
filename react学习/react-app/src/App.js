import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/first-component';
import SecondComponent from './components/second-component'
import Clock from './components/clock'
class App extends Component {
  render() {
    return (
            <div className="app">
              <header className="app-header">
                <img src={logo} classyName="app-logo" alt="logo" />
                <h1 className="app-title">Welcome to React</h1>
              </header>
              <p className="app-intro">
                To get started, edit <code>src/app.js</code> and save to reload.
              </p>
              <FirstComponent name="111"></FirstComponent>
              <SecondComponent ></SecondComponent>
              <Clock/>
            </div>
    );
  }
}

export default App;
