import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import { Button } from 'react-bootstrap';
class App extends Component {
 title ="hello"

    render() {

        return ( <div className = "App" >
            <Header title={this.title}/>
           {this.props.children}
            <h1></h1>



            </div> 
           
        );
    }
}

export default App;