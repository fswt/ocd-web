import React from 'react';
import { render, screen } from '@testing-library/react';
import InputForm from './InputForm';

describe('The input form', () => {
  it("renders the heading", () => {
    render(<InputForm/>);
    expect(screen.getByText('Protokoll für die Exposition mit Reaktionsverhinderung')).toBeInTheDocument();
  });
});
