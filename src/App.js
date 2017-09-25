import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

const App = () => (
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>
);

export default App;
