import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';

//injectTapEventPlugin();

let button;
let contractName;
let descritpion;
let price;
var index;
var contractToEdit;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      list: [],
      contractName: [],
      description: [],
      price: [],

      newContractName: [],
      newDescription: [],
      newPrice: [],

      index: 0,
      counter: 0,

    })
  }

  handleChange(field, e) {
    this.setState({
      ...this.state,
      [field]: e.target.value,
    })
  }

  handleEditChange(field, e) {
    this.setState({
      ...this.state,
      [field]: e.target.value,
    })

    console.log(this.state.counter);
  }


 handleSubmit() {
   var Contract = [];
   Contract.push(this.state.contractName);
   Contract.push(this.state.description);
   Contract.push(this.state.price);
   Contract.push(this.state.index);
   let newContracts = this.state.list.concat([Contract]);
   this.setState({
     ...this.state, 
     list: newContracts,
     index: this.state.index + 1,
   })

   console.log(this.state.list);
  }

  handleEdit(c) {
    var index = c[3];
    var contractToEdit = this.state.list[index];
    console.log(index);
    console.log(contractToEdit);

  }

  handleDone() {
    contractToEdit[0] = this.state.newContractName;
    contractToEdit[1] = this.state.newDescription;
    contractToEdit[2] = this.state.newPrice;

    console.log(contractToEdit);
  }



  render() {

    const ContractList = this.state.list.map (
      (c) => {
        return (
          <li>
             {"Contract Name:" + " " + c[0] + " " + "Description:" + " " + " " + c[1] + " " + "Price:" + c[2]}
             <button className= "edit-button" id= {this.state.counter} onClick= {() => this.handleEdit(c)}> Edit </button>
          </li>
        )
      }
    )
 
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <h2>Contract Tracker</h2>
        </div>

        <div className="App-intro">
          <TextField hintText="Contact Name" onChange={ (e) => this.handleChange('contractName', e)}/><br/>
          <TextField hintText="Description"onChange={ (e) => this.handleChange('description', e)}/><br/>
          <TextField hintText="Price" onChange={ (e) => this.handleChange('price', e)}/><br/>
          <FlatButton label="Submit" onClick={() => this.handleSubmit()}/><br/>
        </div>
        <div className="App-contact-list">
          Contract Name 
          <ul type="none">
            {ContractList}
          </ul>
        </div>
       
        <div className="App-edit-window">   
          Edit Window
          <form>
            <label>Contract Name:<input type="text" name="name" onChange={ (e) => this.handleEditChange('newContractName', e)} /></label>
            <label>Description:<input type="text" name="description" onChange={ (e) => this.handleEditChange('newDescription', e)}/></label>
            <label>price:<input type="text" name="price"onChange={ (e) => this.handleEditChange('newPrice', e)} /></label>
          </form>
          <button onclick={() => this.handleDone()}>Done</button>
          {/*{this.state.newContractName}
          {this.state.newDescription}
          {this.state.newPrice}*/}
          {contractToEdit}
        </div>


      </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
