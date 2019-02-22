
import React, { Component, Fragment } from 'react';
import ContactRow from './ContactRow';


export default class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts.slice(0, 5) || [],
      allContacts: this.props.contacts || [],
      sortedBy: undefined
    }
  }

  onClickRandomContact = () => {
    const otherContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(c => c === contact));
    const randContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];
    if (randContact) {
      this.setState({
        contacts: [...this.state.contacts, randContact]
      }, () => this.state.sortedBy && this.onClickSortContacts(this.state.sortedBy));
    }
  }

  onClickSortContacts = (sortKey) => {
    const contacts = [...this.state.contacts].sort((c1, c2) => {
      switch (sortKey) {
        case 'name':
          return c1.name.localeCompare(c2.name);
        case 'popularity':
          return c2.popularity - c1.popularity;
        default:
          throw new Error(`Invalid short key ${sortKey}`)
      }
    });
    this.setState({
      contacts: contacts,
      sortedBy: sortKey
    });
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

    const Controls = () => {
      return (
        <div className="btn-group mb-4" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary" onClick={this.onClickRandomContact}>+</button>
          <button type="button" className={"btn btn-secondary " + (this.state.sortedBy === 'name' && 'active')} onClick={this.onClickSortContacts.bind(this, 'name')}>Name</button>
          <button type="button" className={"btn btn-secondary " + (this.state.sortedBy === 'popularity' && 'active')} onClick={this.onClickSortContacts.bind(this, 'popularity')}>Popularity</button>
        </div>
      )
    }

    return (
      <Fragment>
       <Controls />
        <table className="table">
          <Head />
          <Body />
        </table>
      </Fragment>
    );
  }
}
