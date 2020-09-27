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

  sortByPopularity = () => {
    console.log("clicked");
    const sortedContact = [...this.state.contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });

    this.setState({
      contacts: sortedContact,
    });
  };

  sortByName = () => {
    const sortedContact = [...this.state.contacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    this.setState({
      contacts: sortedContact,
    });
    console.log("clicked");
  };

  deleteContact = (contacts) => {
    console.log("clicked");
    this.setState({
      contacts: this.state.contacts.filter((c) => c !== contacts),
    });
  };

  render() {
    return (
      <div className="ContactBox">
        <div class="buttons">
          <button onClick={this.addNewContact}>Add Random contact</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          <button onClick={this.sortByName}>Sort by name</button>
        </div>

        <table className="media minimalistBlack">
          {this.state.contacts.map((contact) => (
            <div class="box">
              <ContactBox {...contact} />
              <div>
                <button onClick={() => this.deleteContact(contact)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </table>
      </div>
    );
  }
}

export default ContactList;
