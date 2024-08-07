import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('Card component', () => {
  const caption = 'Test Caption';
  const src = 'https://example.com/image.jpg';
  const currNum = 1;
  const totalNum = 5;

  test('renders without crashing', () => {
    render(<Card caption={caption} src={src} currNum={currNum} totalNum={totalNum} />);
  });

  test('displays the correct caption', () => {
    render(<Card caption={caption} src={src} currNum={currNum} totalNum={totalNum} />);
    expect(screen.getByText(caption)).toBeInTheDocument();
  });

  test('displays the correct image', () => {
    render(<Card caption={caption} src={src} currNum={currNum} totalNum={totalNum} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', src);
    expect(img).toHaveAttribute('alt', caption);
  });

  test('displays the correct image number', () => {
    render(<Card caption={caption} src={src} currNum={currNum} totalNum={totalNum} />);
    expect(screen.getByText(`Image ${currNum} of ${totalNum}.`)).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Card caption={caption} src={src} currNum={currNum} totalNum={totalNum} />);
    expect(asFragment()).toMatchSnapshot();
  });
});