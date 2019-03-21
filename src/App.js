import React, { Component } from 'react';
import './App.css';
import Click from "./component/Click";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Ejercicio CICE</p>
          <Click/>
        </header>
      </div>
    );
  }
}

export default App;
