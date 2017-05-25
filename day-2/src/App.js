import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var quotes = ["Just hire a lawyer", "Empower your team", "Raise your prices", "Ignore most of the advice you're given", "Stop trying to hire a unicorn"];



class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      attribute: quotes,
      currentIndex: 0,
    };
  }

  rotateQuotes(quotes) {
      if ( this.state.currentIndex === 4) {
        this.setState( {
          attributes: quotes, 
          currentIndex: 0,
        })
      }
      else {
        this.setState( {
          currentIndex: this.state.currentIndex +1
        }) 
      }
  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Great Startup Advice</h2> 
        </div>
        <h1 className="App-quotes">
          <button className="App-button-quote" onClick={() => this.rotateQuotes()}><large>{quotes[this.state.currentIndex]}</large></button>
        </h1>

      </div>
    );
  }
}




export default App;
