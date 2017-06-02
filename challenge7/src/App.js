import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var quotes = ["You Rock!", "Go Girl!", "You can do it!", "Yes!"];
var index = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: quotes,
      index: 0,
    }
  }

  handleOrder() {
    if (this.state.index === 3) {
      this.setState({
        ...this.state,
        index: 0,
      })
    }

    else {
      this.setState({
        ...this.state,
        index: this.state.index + 1,
      })

    }


  }

  handleRandom() {

    var randomNumber = Math.floor((Math.random() * 4) )


    this.setState({
      ...this.state, 
      index: randomNumber,
    })

  }


  render() {


    return (
      <div className="App">
        <div className="App-header">
          <h2>Motivational Quotes</h2>
        </div>
        <p className="App-intro">
          <button className="button-display" onClick={() => { this.handleOrder() }}>{quotes[this.state.index]}</button>
        </p>
        <div>
          <button className="button-in-order" onClick={() => { this.handleOrder() }}> In order</button>
          <button className="button-random" onClick={() => { this.handleRandom() }}> Random</button>
      </div>

      </div>
    );
  }
}

export default App;
