import React from "react";
import { render, screen } from '@testing-library/react';
import DoctorForm from '../DoctorForm'

jest.mock('../DoctorForm');
test('renders Doctorform', () => {
  render(<DoctorForm/>);
  expect(screen).toMatchSnapshot();
});