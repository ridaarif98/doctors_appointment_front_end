import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../Login';

jest.mock('../Login');
test('renders Login', () => {
  render(<Login />);
  expect(screen).toMatchSnapshot();
});
