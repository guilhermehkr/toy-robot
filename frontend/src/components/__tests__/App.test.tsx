import React from 'react';
import { render } from '@testing-library/react';
import Game from '../Game';

describe('<Game />', () => {

  test('should render Run button', () => {
    const { getByText,  } = render(<Game />);
    const button = getByText(/Run/i);
    expect(button).toBeInTheDocument();
  });

  test('should render Toy Robot title', () => {
    const { getByText } = render(<Game />);
    const title = getByText(/Toy Robot/i);
    expect(title).toBeInTheDocument();
  });
});
