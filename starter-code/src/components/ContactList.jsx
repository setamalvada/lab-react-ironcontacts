import React, { Component } from "react";
import ContactBox from "./ContactBox";

class ContactList extends Component {
  state = {
    contacts: this.props.contacts.slice(0, 5) || [],
  };

  addNewContact = () => {
    const randomContact = this.props.contacts[
      Math.floor(Math.random() * this.props.contacts.length)
    ];

    if (randomContact) {
      this.setState({
        contacts: [randomContact, ...this.state.contacts],
      });
    }

    console.log("clicked");
  };

  render() {
    return (
      <div className="ContactBox">
        <button onClick={this.addNewContact}>Add Random contact</button>
        <table className="media">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contacts.map((contact) => (
            <ContactBox {...contact} />
          ))}
        </table>
      </div>
    );
  }
}

export default ContactList;
