
import React, { Component, Fragment } from 'react';
import ContactRow from './ContactRow';

export default class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts || []
    }
  }

  render() {

    const Head = () => {
      return (
        <thead>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
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
        <table className="table">
          <Head />
          <Body />
        </table>
      </Fragment>
    );
  }
}
