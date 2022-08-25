import React from "react";
import { render, screen } from '@testing-library/react';
import MobileMenu from '../MobileMenu';

jest.mock('../MobileMenu');
test('renders MobileMenu', () => {
  render(<MobileMenu/>);
  expect(screen).toMatchSnapshot();
});