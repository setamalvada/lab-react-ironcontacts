
import React, { Component, Fragment } from 'react';
import ContactRow from './ContactRow';


export default class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts.slice(0, 5) || [],
      allContacts: this.props.contacts || [] 
    }
  }

  onClickRandomContact = () => {
    const otherContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(c => c === contact));
    const randContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];
    if (randContact) {
      this.setState({
        contacts: [...this.state.contacts, randContact]
      });
    }
  }

  render() {
    const Head = () => {
      return (
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
          </tr>
        </thead>
      )
    }

    const Body = () => {
      return (
        <tbody>
          {this.state.contacts.map((contact, index) => {
            return <ContactRow key={index} {...contact} />
          })}
        </tbody>
      )
    }

    return (
      <Fragment>
        <button className="btn btn-primary mb-4" onClick={this.onClickRandomContact}>Add Random Contact</button>
        <table className="table">
          <Head />
          <Body />
        </table>
      </Fragment>
    );
  }
}
