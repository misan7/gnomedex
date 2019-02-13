import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal';

test('renders <Modal/> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
});
