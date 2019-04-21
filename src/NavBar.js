import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom'

class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      InvDisabled: localStorage.getItem('user') ? "disabled":""
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('rol')
    this.props.handleAppChange('Login')
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
                    <MDBNavItem>
                      <MDBNavLink to="#" onClick={() => this.props.handleAppChange('Inventory')}>Inventario</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" onClick={() => this.props.handleAppChange('Production')}>Produccion</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" onClick={this.handleLogout}>Log out</MDBNavLink>
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