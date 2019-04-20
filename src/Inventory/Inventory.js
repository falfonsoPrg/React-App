import React, { Component } from 'react'
import Options from './Options'
import List from './List'
import Agregar from './Agregar'
import Entrada from './Entrada'
import { MDBContainer } from 'mdbreact'


class Inventory extends Component {
    constructor() {
        super()
        this.state = {
            app: <List />
        }
    }

    handleAppChange = (event) => {
        const {name} = event.target
        if(name === 'Agregar') {this.setState({app: <Agregar /> })}
        else if(name === 'Entrada') {this.setState({app: <Entrada />})}
        else {this.setState({app: <List /> })}
    }

    render() {
        return (
            <div>
                <MDBContainer>
                    <Options handleAppChange={this.handleAppChange}/>
                    {this.state.app}
                </MDBContainer>
            </div>
        );
    }
}

export default Inventory