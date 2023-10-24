import React from 'react';
import { render } from '@testing-library/react';
import Schedule from './Schedule'; // Adjust the import path based on your project structure

describe('Schedule Component', () => {
  it('renders without crashing', () => {
    render(<Schedule />);
  });

  it('renders events correctly', () => {
    // You can add test cases to check if specific events or components are rendered correctly
    // For example:
    // const { getByText } = render(<Schedule />);
    // expect(getByText('Participant Check-In')).toBeInTheDocument();
    // expect(getByText('Opening Ceremony')).toBeInTheDocument();
    // ... add more assertions as needed
  });

    // Verifies if the Schedule component renders correctly when no events are present


  it('renders correctly with no events', () => {
    // You can add test cases to check if the Schedule component renders correctly when no events are present
    // For example:
    // const { getByText } = render(<Schedule />);
    // expect(getByText('No events to display')).toBeInTheDocument();
    // ... add more assertions as needed
  });


  // Add more test cases as needed based on your component's behavior
  
});
