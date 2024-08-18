import React from 'react';
import { render, screen } from '@testing-library/react';
import GenerateRecipePage from '../pages/GenerateRecipePage';
import '@testing-library/jest-dom/extend-expect';

// Mocking the components that are already tested individually
jest.mock('../components/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer Component</div>);

describe('GenerateRecipePage Component', () => {
  test('renders GenerateRecipePage component correctly', () => {
    render(<GenerateRecipePage />);

    // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    // Check if hero section elements are rendered
    expect(screen.getByText(/Create Eco-friendly Recipe with AI/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter ingredients/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Generate Recipe/i })).toBeInTheDocument();
  });
});
