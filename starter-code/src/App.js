import React, { Component } from 'react';
import './App.css';
import ContactList from './components/contacts/ContactList';
import contacts from './data/contacts.json';
import Header from './components/misc/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <ContactList contacts={contacts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
