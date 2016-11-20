import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './groceryList.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Shopping List</h2>
        </div>
        <GroceryList name="Whole Foods" />
      </div>
      
    );
  }
}

export default App;
