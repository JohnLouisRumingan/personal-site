import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ArtContainer from './Containers/ArtContainer'

test('art container says no commissions', () => {

  const { getByText } = render(<ArtContainer />);
  const noCommission = getByText(/Currently not accepting commissions./);
  expect(noCommission).toBeInTheDocument();
})