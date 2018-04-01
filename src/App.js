import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">This is secret <span role="img" aria-label="prohibited" className="broccoli">🚫</span></h1>
      </div>
    );
  }
}

export default App;
