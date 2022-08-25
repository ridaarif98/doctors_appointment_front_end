import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from '../Register';

jest.mock('../Register');
test('renders Register', () => {
  render(<Register />);
  expect(screen).toMatchSnapshot();
});
