import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom'

class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
          <Router>
          <header>
            <MDBNavbar color="indigo" dark expand="md">
            <MDBContainer>
              <MDBNavbarBrand href="/">
                <strong>STI</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#">Inventario</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">Produccion</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            </header>
          </Router>
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;