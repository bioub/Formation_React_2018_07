import React from 'react';
import { ButtonIncrement } from './ButtonIncrement';
import { ButtonIncrementConnected } from '../containers/ButtonIncrementConnected';
import { HelloConnected } from '../containers/HelloConnected';
import { FormPrenomConnected } from '../containers/FormPrenomConnected';

const App = () => (
  <div>
    <ButtonIncrement count={2} handleClick={() => console.log('Coucou')} />
    <ButtonIncrementConnected index={0}/>
    <ButtonIncrementConnected index={1}/>
    <ButtonIncrementConnected index={2}/>
    <ButtonIncrementConnected index={0}/>
    <FormPrenomConnected/>
    <HelloConnected/>
  </div>
);

export { App };
