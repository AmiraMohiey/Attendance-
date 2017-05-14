import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import StudentHome from './studenthome';

export default  () => (
  <MuiThemeProvider>
    <StudentHome />
  </MuiThemeProvider>
);

