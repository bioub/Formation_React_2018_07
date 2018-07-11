import React from 'react';
import { ButtonIncrement } from './ButtonIncrement';
import { ButtonIncrementConnected } from '../containers/ButtonIncrementConnected';
import { HelloConnected } from '../containers/HelloConnected';
import { FormPrenomConnected } from '../containers/FormPrenomConnected';
import { desactivable } from '../hocs/desactivable';
import { ButtonIncrementWithState } from './ButtonIncrementWithState';
import { ButtonPrenomUpperConnected } from '../containers/ButtonPrenomUpper';
import { UsersList } from './UsersList';
import { UsersListConnected } from '../containers/UsersListConnected';

// TODO remove
const HelloConnectedDesactivable = desactivable(HelloConnected);
const ButtonIncrementWithStateDesactivable = desactivable(ButtonIncrementWithState);
const ButtonIncrementConnectedDesactivable = desactivable(ButtonIncrementConnected);

const App = () => (
  <div>
    <ButtonIncrementWithStateDesactivable/>
    <ButtonIncrement count={2} handleClick={() => console.log('Coucou')} />
    <ButtonIncrementConnected index={0}/>
    <ButtonIncrementConnectedDesactivable index={1}/>
    <ButtonIncrementConnected index={2}/>
    <ButtonIncrementConnected index={0}/>
    <FormPrenomConnected/>
    <HelloConnectedDesactivable/>
    <ButtonPrenomUpperConnected/>
    <h2>Sans API REST</h2>
    <UsersList fetchUsers={() => {}} users={[{id: '1', name: 'Jean'}, {id: '2', name: 'Eric'}]}/>
    <h2>Connectée avec API REST</h2>
    <UsersListConnected/>
  </div>
);

export { App };
