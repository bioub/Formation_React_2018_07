import React, { Component } from 'react';

class ContactShow extends Component {
  componentDidMount() {
    // TODO changer de lifecycle hook à cause react-router
    this.props.fetchContact('1'); // TODO dynamic
  }
  render() {
    return (
      <div>
        <p>Name: {this.props.contact.name}</p>
        <p>Email: {this.props.contact.email}</p>
        <p>Phone: {this.props.contact.phone}</p>
      </div>
    );
  }
}

export default ContactShow;