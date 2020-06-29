import React from 'react';
import { render } from '@testing-library/react';
import ArtContainer from './ArtContainer';
import HobbyContainer from './HobbyContainer';
import ProjectContainer from './ProjectContainer';


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


test ('project container contains "Projects" headline', () => {


  //line 27 not working, need to connect mock store usage, not basic component like hobby container
  const { getByText } = render(<ProjectContainer />);
  const project = getByText(/Projects Page:/);
  expect(project).toBeInTheDocument();
})