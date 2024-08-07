import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Coin from './Coin';

test('renders without coin image initially', () => {
  render(<App />);
  const coinImage = screen.queryByAltText(/heads|tails/i);
  expect(coinImage).not.toBeInTheDocument();
});

test('updates text when coin lands on heads', () => {
  render(<Coin side="heads" />);
  const coinImage = screen.getByAltText(/heads/i);
  expect(coinImage).toBeInTheDocument();
  expect(coinImage).toHaveAttribute('src', 'path/to/heads.png'); // Update with actual path
});

test('updates text when coin lands on tails', () => {
  render(<Coin side="tails" />);
  const coinImage = screen.getByAltText(/tails/i);
  expect(coinImage).toBeInTheDocument();
  expect(coinImage).toHaveAttribute('src', 'path/to/tails.png'); // Update with actual path
});
