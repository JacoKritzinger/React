import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Products from './Products.js';
import { Button } from 'react-bootstrap';
import Rating from './Rating.js';
import JumboTronComponent from './JumboTronComponent';



class App extends Component {
  render() {
    const isValid = true;
    return (
      <div>
        <Products />
        <Button variant="primary" disabled={!isValid}>Default</Button>
        <JumboTronComponent />
      </div>
    );
  }
}

export default App;


