import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders an error if API call crashes', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ err: true });
  expect(wrapper.contains(<div>[Error]: Run! The Orcs are comming!</div>)).toBe(
    true
  );
});
