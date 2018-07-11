import React from 'react';
import ContactsListContainer from '../containers/ContactsListContainer';
import { Switch, Route, Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ContactShowContainer from '../containers/ContactShowContainer';

const Contacts = ({ match }) => {
  return (
    <div>
      <Row>
        <Col md="3">
          <ContactsListContainer/>
          <Link to={`${match.url}/add`} className="mt-3 btn btn-primary btn-block">Add</Link>
        </Col>
        <Col>
        <Switch>
          <Route path={`${match.url}/add`} component={() => 'Add'}/> 
          <Route path={`${match.url}/:id`} component={ContactShowContainer}/> 
        </Switch>
        </Col>
      </Row>
    </div>
  );
};

export { Contacts };