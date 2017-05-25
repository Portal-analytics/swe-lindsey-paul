import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var quotes = ["Get some fucking exercise", "Solve a real fucking problem", "Do fucking one on one's", "Stop fucking around and get back to work", "Act like you know what you're fucking doing"];
class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      attribute: quotes,
      currentIndex: 0,
    };
  }

  rotateQuotes() {
    if( this.state.currentIndex === 4) {
      this.setState( {
        attributes: quotes,
        currentIndex: 0,
      })
    }
    else {
      this.setState( {
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h1>Great Fucking Startup Advice</h1>
        </div>
        <button className="App-button-quote" onClick={() => this.rotateQuotes()}>{quotes[this.state.currentIndex]}</button>
      </div>
    );
  }
}



export default App;
