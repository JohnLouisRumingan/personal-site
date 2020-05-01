import React from 'react';
import { render } from '@testing-library/react';
import ArtContainer from './ArtContainer';
import HobbyContainer from './HobbyContainer';

test('art container says no commissions', () => {

  const { getByText } = render(<ArtContainer />);
  const noCommission = getByText(/Currently not accepting commissions./);
  expect(noCommission).toBeInTheDocument();
})

test('hobby container contains "Hobbies" ', () => {

  const { getByText } = render(<HobbyContainer />);
  const hobby = getByText(/Hobbies:/);
  expect(hobby).toBeInTheDocument();
})