import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Contacts } from './contacts/components/Contacts';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">AddressBook</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contacts">Contacts</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Container fluid className="my-3">
          <Route path="/" component={() => 'Home'} exact={true} />
          <Route path="/contacts" component={Contacts} />
        </Container>
      </div>
    );
  }
}

export default App;
