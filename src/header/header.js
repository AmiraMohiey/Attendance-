import React, { Component } from 'react';
import { Button,Navbar,Nav ,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
    import { Route, RouteHandler, Link } from 'react-router'; 
 import { LinkContainer } from 'react-router-bootstrap';
export default class Header extends Component {
render(){
      console.log(this.props)
        return (




  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Attendence System</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
          <LinkContainer to="/login">
        <NavItem eventKey={1} >Login</NavItem>
        </LinkContainer>
         <LinkContainer to="/signup">
        <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
         </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>








        );
    }
}

     
         
     
     
     
     
