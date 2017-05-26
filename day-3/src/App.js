import React, { Component } from 'react';
import './App.css';
// import injectTapEventPLugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

var quotes = ["Just hire a lawyer", "Empower your team", "Raise your prices", "Ignore most of the advice you're given", "Stop trying to hire a unicorn"];



class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      attribute: quotes,
      currentIndex: 0,
    };
  }

  clickRandom(quotes) {
    this.setState({
      currentIndex: Math.floor(Math.random() * this.state.attribute.quotes.length)
    })

  }


  clickThrough(quotes) {
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
          <MuiThemeProvider><AppBar title="Header" iconClassNameRight="muidocs-icon-navigation-expand-more"/></MuiThemeProvider>
        </div>
        <div className="App-quotes">
          <button className="App-button-quote" onClick={() => this.rotateQuotes()}><large>{quotes[this.state.currentIndex]}</large></button>

        </div>
        <div className="App-buttons">
          <button className="App-button-quotes-clickthrough" onClick={() => this.clickThrough()}>In Order</button>
          <button className="App-button-quotes-random" onClick={() => this.clickRandom()}>Random</button>
        </div>




      </div>
    );
  }
}





export default App;
