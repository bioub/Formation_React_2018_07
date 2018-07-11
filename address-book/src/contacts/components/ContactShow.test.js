import React from 'react';
import { shallow } from 'enzyme';
import ContactShow from './ContactShow';

it('should render ContactShow properly', () => {
  shallow(<ContactShow/>);
});

it('should render contact in ContactShow', () => {
  const contact = {
    name: 'Jean Dupont',
    email: 'jdupont@gmail.com',
    phone: '06 33 34 66 77',
  };

  const wrapper = shallow(<ContactShow contact={contact}/>);

  expect(wrapper.find('p').first().text()).toBe('Name: Jean Dupont');
  expect(wrapper.find('p').at(1).text()).toBe('Email: jdupont@gmail.com');
  expect(wrapper.find('p').last().text()).toBe('Phone: 06 33 34 66 77');
});