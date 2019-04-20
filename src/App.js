import React, { Component } from 'react'
import Inventory from './Inventory/Inventory'
import Navbar from './NavBar'

class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <Inventory />
      </div>
    );
  }
}

export default App;
