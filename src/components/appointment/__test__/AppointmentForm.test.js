import React from 'react';
import { render, screen } from '@testing-library/react';
import AppointmentForm from '../AppointmentForm';

jest.mock('../AppointmentForm');
test('renders Available Houses', () => {
  render(<AppointmentForm />);
  expect(screen).toMatchSnapshot();
});
