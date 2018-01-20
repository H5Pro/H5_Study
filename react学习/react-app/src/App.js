import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/first-component';
import SecondComponent from './components/second-component'
class App extends Component {
  render() {
    return (
            <div className="App">
              <header className="App-header">
                <img src={logo} classyName="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <FirstComponent name="111"></FirstComponent>
              <SecondComponent ></SecondComponent>
            </div>
    );
  }
}

export default App;
