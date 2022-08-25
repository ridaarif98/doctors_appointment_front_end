import React from "react";
import { render, screen } from '@testing-library/react';
import DoctorDetails from '../DoctorDetails';

jest.mock('../DoctorDetails');
test('renders Doctorform', () => {
  render(<DoctorDetails/>);
  expect(screen).toMatchSnapshot();
});