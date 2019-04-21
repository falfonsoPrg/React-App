import React, { Component } from 'react'
import Inventory from './Inventory/Inventory'
import Navbar from './NavBar'
import Production from "./Production/Production"
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Inventory />
=======
          <Navbar />
          <Production />
>>>>>>> 69ba2c911f5cc6b8300c0f2d24eaac14f3727294
      </div>
    );
  }
}

export default App;
