import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            alert(11111)
          }}
        >点击
        </button>
      </div>
    );
  }
}

export default App;
