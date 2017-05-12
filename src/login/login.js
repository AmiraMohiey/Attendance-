import React, { Component } from 'react';
import { Button,Panel,Navbar,Nav ,NavItem,NavDropdown,MenuItem ,Form,FormControl,FormGroup,Col,ControlLabel} from 'react-bootstrap';
 import {Link} from 'react-router'
export default class Login extends Component {
render(){
    
        return (
          
<Col sm={3} md={7} smOffset={3}  >
<Panel >
 <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={3} >
        Email
      </Col>
      <Col sm={5}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={3}>
        Password
      </Col>
      <Col sm={5}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    

    <FormGroup>
      <Col sm={10}>
        <Button type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
    </Panel>
  </Col>

        );
    }
}

     
         
     
     
     
     
     
