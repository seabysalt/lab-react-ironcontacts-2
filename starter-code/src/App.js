import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import 'react-flex/index.css';
import List from './components/List.js'

class App extends Component {

constructor() {
  let contactsCopy = [...contacts];
  contactsCopy.splice(4);

  super();
  this.state = {
        contacts: contactsCopy
  }
}

addRandom = () => {
  const extendedContacts = this.state.contacts;
  extendedContacts.push([...contacts][Math.floor(Math.random() * [...contacts].length)])
  this.setState({
    contacts: extendedContacts
  })
}

sortByName = () => {
  const sortedContactsByName = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));
  this.setState({
    contacts: sortedContactsByName
  })
}

sortByPopularity = () => {
  console.log("check")
  const sortedContactsByPopularity = this.state.contacts.sort((a,b) => b.popularity - a.popularity)
  this.setState({
    contacts: sortedContactsByPopularity 
  })
}

deleteContact = (contactIndex) => {
  const updatedContacts = this.state.contacts;
  updatedContacts.splice(contactIndex, 1);
  this.setState({
      contacts: updatedContacts
  })
}

  render() {
    return (
      <div className="App">

        <h1>IronContacts</h1>
        <div className="List">
          <div className="BigBtn">
            <button onClick={this.addRandom} >Add Random Contact</button>
            <button onClick={this.sortByName}>Sort by Name</button>
            <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          </div>
          <div>
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
            <h2 className="action">Action</h2>
          </div>

          {
            this.state.contacts.map((contact, index) => {
              return <List key={index} {...contact} clickToDelete={() => this.deleteContact(index)}/>
            })
          }

        </div>
    
      </div>
    );
  }
}

export default App;
