/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: App.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 04/06/2023
*/

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders without errors', () => {
    render(<App />);
  });

  test('renders Headline component', () => {
    const { getByTestId } = render(<App />);
    const headlineComponent = getByTestId('headline-component');
    expect(headlineComponent).toBeInTheDocument();
  });

  test('renders Home component', () => {
    const { getByTestId } = render(<App />);
    const homeComponent = getByTestId('home-component');
    expect(homeComponent).toBeInTheDocument();
  });
});
