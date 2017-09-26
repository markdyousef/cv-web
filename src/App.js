import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Art from './components/Art';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Home>
        <Route path="/search" component={Search}/>
        <Route path="/art" component={Art}/>
      </Home>
    </Router>
  </MuiThemeProvider>
);

export default App;
