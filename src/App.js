import React, { Component } from 'react';
import {Array1D, NDArrayMathGPU, Scalar} from 'deeplearn';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const math = new NDArrayMathGPU();
    const a = Array1D.new([1,2,3]);
    const b = Scalar.new(2);
    math.scope(() => {
      const result = math.multiply(a,b);
      console.log(result.getValues())
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
