import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './shoppingList.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Example</h2>
        </div>
        <p id="test" className="App-intro" >
          Looping over a list.
        </p>
        <ShoppingList name="Whole Foods" />
      </div>
      
    );
  }
}

export default App;
