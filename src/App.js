import React, { Component } from 'react'
import Inventory from './Inventory/Inventory'
import Navbar from './NavBar'
import Production from "./Production/Production"
import Login from "./Login"

class App extends Component {
  constructor (props){
    super(props)
    this.state={
      app: <Login />
    }
  }

  handleAppChange = (event) =>{
    const {name} = event.target
    if(name==="Login" && !localStorage.getItem('user')) this.setState({app: <Login />})
    else if(name==="Production")this.setState({app: <Production />})
    else if(name==="Inventory")this.setState({app: <Inventory />})
  }

  render() {
    return (
      <div>
          {this.state.app}
      </div>
    );
  }
}

export default App;
