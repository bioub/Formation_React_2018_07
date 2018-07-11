import React, { PureComponent } from 'react';
import { Loading } from '../../commons/components/Loading';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class ContactsList extends PureComponent {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const contactList = this.props.contacts.map((c) => <ListGroupItem tag={Link} to={this.props.match.path+'/'+c.id} key={c.id}>{c.name}</ListGroupItem>);
   
    if (this.props.isFetching) {
      return <Loading/>;
    }
    
    return (
      <ListGroup>
        {contactList}
      </ListGroup>
    );
  }
}

export default ContactsList;