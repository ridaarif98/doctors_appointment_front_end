import React from 'react';
import { render, screen } from '@testing-library/react';
import Appointments from '../Appointments';

jest.mock('../Appointments');

test('renders Available Appointments', () => {
  render(<Appointments />);
  expect(screen).toMatchSnapshot();
});
