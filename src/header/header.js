import React, { Component } from 'react';
import { Button,Navbar,Nav ,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
    import { Route, RouteHandler, Link } from 'react-router'; 
 import { LinkContainer } from 'react-router-bootstrap';
export default class Header extends Component {
  header=false
render(){

      console.log(this.props)
        return (




  <Navbar inverse collapseOnSelect id ="myheader" hidden={this.props.header} >
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Attendence System</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
       

        <LinkContainer to="/">

        <NavItem eventKey={1}  href="/">Home</NavItem>
         </LinkContainer>
        
      </Nav>
      <Nav pullRight>
          <LinkContainer to="/admin/login">
        <NavItem eventKey={1} >Logout</NavItem>
        </LinkContainer>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>








        );
    }
}

     
         
     
     
     
     
