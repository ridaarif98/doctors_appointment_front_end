import React from 'react';
import { render, screen } from '@testing-library/react';
import DesktopMenu from '../DesktopMenu';

jest.mock('../DesktopMenu');
test('renders DesktopMenu', () => {
  render(<DesktopMenu />);
  expect(screen).toMatchSnapshot();
});
