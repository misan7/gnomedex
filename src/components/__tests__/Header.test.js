import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

it('renders <Header/> without crashing', () => {
  shallow(<Header />);
});

it('CheckboxWithLabel changes the text after click', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('.clear-btn').text()).toEqual('Clear Parameters');
});
