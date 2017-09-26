import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Art from './components/Art';
import Search from './components/Search';
import Class from './components/Class';
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
        <Route path="/class" component={Class}/>
      </Home>
    </Router>
  </MuiThemeProvider>
);

export default App;
