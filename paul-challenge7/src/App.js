import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var quotes = ["Humility is recognition of limitations", "However great your dedication, you never win anything on your own", 
"Don't worry about failures, worry about chances you miss when you don't even try",
"No beauty shines brighter than that of a good heart", "We can't be afraid of being weird"];
class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      currentIndex: 0,
    };
  }

  rotateQuotes() {
    if( this.state.currentIndex === 4) {
      this.setState( {
        currentIndex: 0,
      })
    }
    else {
      this.setState( {
        currentIndex: this.state.currentIndex+1,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <button className="App-button-quote" onClick={() => this.rotateQuotes()}>{quotes[this.state.currentIndex]}</button>
      </div>
    );
  }
}



export default App;