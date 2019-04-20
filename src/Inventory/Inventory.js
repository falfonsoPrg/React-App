import React, { Component } from 'react'
import Options from './Options'
import List from './List'
import { MDBContainer } from 'mdbreact'


class Inventory extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                    <Options />
                    <List />
                </MDBContainer>
            </div>
        );
    }
}

export default Inventory