import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The app', () => {
  it("renders the first protocol", () => {
    render(<App />);
    expect(screen.getAllByText('Protokoll für die Exposition mit Reaktionsverhinderung').length).toBe(2)
  });
});
