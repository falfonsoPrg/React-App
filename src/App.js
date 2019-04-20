import React, { Component } from 'react'
import Inventory from './Inventory/Inventory'
import Navbar from './NavBar'
//import Production from "./Production/Production"
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
