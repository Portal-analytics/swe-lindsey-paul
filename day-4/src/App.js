import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';


let button;
let contractName;
let descritpion;
let price;
var index;
var contractToEdit;

var count = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      list: [],
      contractName: "",
      description: "",
      price: "",

      counter: 0,
      index: 0,

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

    // console.log(this.state.counter);
  }


 handleSubmit() {
   var entryArr = this.state.list, 
   updatedList = this.state.list.concat(
      [
        {contractName: this.state.contractName,
          description: this.state.description,
          price: this.state.price,
          index: this.state.index +1}
      ]);

    this.setState({
      ...this.state, 
      list: updatedList
    })

  //  //Challenge 4 
  //  var Contract = [];
  //  Contract.push(this.state.contractName);
  //  Contract.push(this.state.description);
  //  Contract.push(this.state.price);
  //  Contract.push(this.state.index);
  //  let newContracts = this.state.list.concat([Contract]);
  //  this.setState({
  //    ...this.state, 
  //    list: newContracts,
  //    index: this.state.index + 1,
  //  })

  //  console.log(this.state.list);
  }

  handleEdit(c) {
    const updatedList = this.state.list.slice(0);
    updatedList[c.index].isEditing = true;

    this.setState({
      ...this.state, 
      list: updatedList,
    })

  }

  handleDone(c) {
    const updatedList= this.state.list.slice(0);

    updatedList[c.index].isEditing = false;
    updatedList[c.index].contractName = this.state.contractName;
    updatedList[c.index].description = this.state.description;
    updatedList[c.index].price = this.state.price;

    this.setState({
      ...this.state,  
      list: updatedList
    })

  }



  render() {

    /*// Challenge 4
    const ContractList = this.state.list.map (
      (c) => {
        return (
          <li>
             {"Contract Name:" + " " + c[0] + " " + "Description:" + " " + " " + c[1] + " " + "Price:" + c[2]}
             <button className= "edit-button" id= {this.state.counter} onClick= {() => this.handleEdit(c)}> Edit </button>
          </li>
        )
      }
    )*/


    //Challenge 5
    const ContractList = this.state.list.map(
      (c) => {
        return(
          <li>
            Contract Name: { !c.isEditing && c.contractName + " "}
            { c.isEditing && <input type="text" value={this.state.contractName} onChange={(e) => this.handleEditChange('contractName', e)}/> }
            Description: { !c.isEditing && this.state.description + " "}
            { c.isEditing && <input type="text" value={this.state.description} onChange={(e) => this.handleEditChange('description', e)}/> }
            Price: { !c.isEditing && this.state.price + " "}
            { c.isEditing && <input type="text" value={this.state.price} onChange={(e) => this.handleEditChange('price', e)}/> }

            <button onClick= { () => {this.handleEdit(c)}}> Edit </button>
            <button onClick= { () => {this.handleDone(c)}}>Done</button>


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
          Contract List 
          <ul type="none">
            {ContractList}
          </ul>
        </div>


      </div>

      </MuiThemeProvider>
    );
  }
}

export default App;


{/*<form>
            <label>Contract Name:<input type="text" name="name" onChange={ (e) => this.handleEditChange('newContractName', e)} /></label>
            <label>Description:<input type="text" name="description" onChange={ (e) => this.handleEditChange('newDescription', e)}/></label>
            <label>price:<input type="text" name="price"onChange={ (e) => this.handleEditChange('newPrice', e)} /></label>
          </form>
          <button onclick={() => this.handleDone()}>Done</button>*/}
          {/*{this.state.newContractName}
          {this.state.newDescription}
          {this.state.newPrice}*/}