import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from './Carousel';

const photos = [
  { src: 'https://example.com/image1.jpg', caption: 'Image 1' },
  { src: 'https://example.com/image2.jpg', caption: 'Image 2' },
  { src: 'https://example.com/image3.jpg', caption: 'Image 3' }
];

const title = 'Test Carousel';

describe('Carousel component', () => {
  test('renders without crashing', () => {
    render(<Carousel photos={photos} title={title} />);
  });

  test('displays the correct title', () => {
    render(<Carousel photos={photos} title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('displays the first image initially', () => {
    render(<Carousel photos={photos} title={title} />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  test('navigates to the next image when right arrow is clicked', () => {
    render(<Carousel photos={photos} title={title} />);
    const rightArrow = screen.getByRole('button', { name: /right/i });
    fireEvent.click(rightArrow);
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Carousel photos={photos} title={title} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('navigates to the previous image when left arrow is clicked', () => {
  render(<Carousel photos={photos} title={title} />);
  const rightArrow = screen.getByRole('button', { name: /right/i });
  fireEvent.click(rightArrow); // Move to the second image
  expect(screen.getByAltText('Image 2')).toBeInTheDocument();

  const leftArrow = screen.getByRole('button', { name: /left/i });
  fireEvent.click(leftArrow); // Move back to the first image
  expect(screen.getByAltText('Image 1')).toBeInTheDocument();
});

test('hides the left arrow on the first image', () => {
  render(<Carousel photos={photos} title={title} />);
  const leftArrow = screen.queryByRole('button', { name: /left/i });
  expect(leftArrow).not.toBeInTheDocument();
});

test('hides the right arrow on the last image', () => {
  render(<Carousel photos={photos} title={title} />);
  const rightArrow = screen.getByRole('button', { name: /right/i });
  fireEvent.click(rightArrow); // Move to the second image
  fireEvent.click(rightArrow); // Move to the third image (assuming there are 3 images)
  const rightArrowAfterClicks = screen.queryByRole('button', { name: /right/i });
  expect(rightArrowAfterClicks).not.toBeInTheDocument();
});
