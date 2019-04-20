import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import Options from './Options'

class ModalPage extends Component {
constructor(props) {
  super(props)

  this.state={
    modal1: false,
    modal2: false,
    modal3: false
  }
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <div>
      <MDBDropdown>
      <MDBDropdownToggle caret color="indigo">
      {this.props.name}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem onClick={this.toggle(1)}>{this.props.options.first}</MDBDropdownItem>
        <MDBDropdownItem onClick={this.toggle(2)}>{this.props.options.second}</MDBDropdownItem>
        <MDBDropdownItem onClick={this.toggle(3)}>{this.props.options.third}</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>

      <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
        <MDBModalHeader toggle={this.toggle(1)}>Agregar Elemento</MDBModalHeader>
        <MDBModalBody>
          
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(1)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>

      <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="lg">
        <MDBModalHeader toggle={this.toggle(2)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" size="sm" onClick={this.toggle(2)}>Close</MDBBtn>
          <MDBBtn color="primary" size="sm">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>

      <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} size="lg">
        <MDBModalHeader toggle={this.toggle(3)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(3)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
    );
  }
}

export default ModalPage;