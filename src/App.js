import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StudentHome from './studenthome';

export default  () => (
  <MuiThemeProvider>
    <StudentHome />
  </MuiThemeProvider>
);

