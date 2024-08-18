import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../pages/Contact';
import '@testing-library/jest-dom/extend-expect';

// Mocking the components that are already tested individually
jest.mock('../components/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer Component</div>);

describe('Contact Page Component', () => {
  test('renders Contact page component correctly', () => {
    render(<Contact />);

    // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    // Check if main elements are rendered
    expect(screen.getByRole('heading', { level: 2, name: /Contact Us/i })).toBeInTheDocument();
    expect(screen.getByText(/If you have any questions or feedback, feel free to reach out to us./i)).toBeInTheDocument();

    // Check if form elements are rendered
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });
});
