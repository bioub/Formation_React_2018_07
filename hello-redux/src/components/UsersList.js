import React, { Component } from 'react';

export class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    // this.props.dispatch(fetchUsers());
    /*
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        dispatch
      })
      */
  }
  render() {
    const usersItems = this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  
    return (
      <ul>
        {usersItems}
      </ul>
    );
  }
}