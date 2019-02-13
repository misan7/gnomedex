import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';

it('renders <Modal/> without crashing', () => {
  shallow(<Modal />);
});
