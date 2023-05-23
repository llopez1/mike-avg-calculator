import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('testing React calculator using Jest', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
