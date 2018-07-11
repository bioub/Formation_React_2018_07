import React, { Component } from 'react';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const contactList = this.props.contacts.map((c) => <li key={c.id}>{c.name}</li>);
    return (
      <ul>
        {contactList}
      </ul>
    );
  }
}

export default ContactsList;