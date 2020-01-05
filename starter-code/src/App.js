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

  render() {
    return (
      <div className="App">

        <h1>IronContacts</h1>
        <div className="List">
          <div>
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
          </div>

          {
            this.state.contacts.map((contact, index) => {
              return <List key={index} {...contact} />
            })
          }

        </div>
    
      </div>
    );
  }
}

export default App;
