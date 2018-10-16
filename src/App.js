import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Formfield from "./Formfield";
import CoolButton from "./CoolButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>

      
<Navbar></Navbar>

<Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />


<Formfield label="Last Name" type="text" placeholder="smith" />

<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>

      </div>
    );
  }
}

export default App;
