import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'




var quotes = ["Get some fucking exercise", "Solve a real fucking problem", "Do fucking one on one's", "Stop fucking around and get back to work", "Act like you know what you're fucking doing", "Get a fucking lawyer"];
class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      attribute: quotes,
      currentIndex: 0,
    };
  }

  rotateQuotes() {
    if( this.state.currentIndex === 5) {
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

  rotateBack() {
    if (this.state.currentIndex === 0) {
      this.setState( {
        attributes: quotes,
        currentIndex: 5,
      })
    }
    else {
      this.setState( {
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  rotateRandom() {
    this.setState( {
      currentIndex: Math.floor(Math.random() * 4)
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <MuiThemeProvider>
            <AppBar title='About This Page'/>
          </MuiThemeProvider>
          
          <h1>Great Fucking Startup Advice</h1>
        </div>
        <button className="App-button-quote" onClick={() => this.rotateQuotes()}>{quotes[this.state.currentIndex]}</button>
        <button className="App-button-next" onClick={() => this.rotateBack()}>"Previous Quote"</button>
        <button className="App-button-next" onClick={() => this.rotateQuotes()}>"Next Quote"</button>
        <button className="App-button-random" onClick={() => this.rotateRandom()}>"Random quote"</button>
        
      </div>
    );
  }
}



export default App;
