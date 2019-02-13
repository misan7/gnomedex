import React from 'react';
import ReactDOM from 'react-dom';
import Cards from '../Cards';

test('renders <Cards/> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cards />, div);
});
