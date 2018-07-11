import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading } from '../../commons/components/Loading';

class ContactShow extends Component {
  componentDidMount() {
    // TODO changer de lifecycle hook à cause react-router
    // this.props.fetch('1'); // TODO dynamic
  }
  render() {
    if (this.props.isFetching) {
      return <Loading/>;
    }

    if (!this.props.contact) {
      return <Redirect to="/contacts"/>;
    }
    
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