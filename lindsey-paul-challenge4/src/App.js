import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';

//injectTapEventPlugin();

var contactName;
var description;
var price;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      contactName: "",
      description: "",
      price: "",
    })
  }

handleSubmit() {
  contactName = this.state.contactName,
  description = this.state.description,
  price = this.state.price,
  this.props.onSubmit({contactName: contactName, description: description, price: price});
  this.setState({
    contactName: '',
    description: '',
    price: '',
  })
  console.log(this.contactName+this.description+this.props);
}

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <h2>Contact Tracker</h2>
        </div>

        <div className="App-intro">
          <TextField hintText="Contact Name"/><br/>
          <TextField hintText="Description"/><br/>
          <TextField hintText="Price"/><br/>
          <FlatButton label="Submit" onClick={handleSubmit()}/><br/>
        </div>
        <div className="App-contact-list">

        </div>
      </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
