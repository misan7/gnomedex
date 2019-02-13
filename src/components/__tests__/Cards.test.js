import React from 'react';
import { shallow } from 'enzyme';
import Cards from '../Cards';

it('renders <Cards/> without crashing', () => {
  shallow(<Cards />);
});
