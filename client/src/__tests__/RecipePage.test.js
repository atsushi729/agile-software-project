import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipePage from '../pages/RecipePage';
import '@testing-library/jest-dom/extend-expect';

// Mocking the components that are already tested individually
jest.mock('../components/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer Component</div>);

describe('RecipePage Component', () => {
  test('renders RecipePage component correctly', () => {
    render(<RecipePage />);

    // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    // Check if buttons are rendered
    expect(screen.getByText('Save recipe')).toBeInTheDocument();
    expect(screen.getByText('Print recipe')).toBeInTheDocument();

    // Check if the ingredients section is rendered
    expect(screen.getByText('Ingredients')).toBeInTheDocument();

    // Check if the directions section is rendered
    expect(screen.getByText('Directions')).toBeInTheDocument();

    // Check if the video section is rendered
    expect(screen.getByText('How to cook')).toBeInTheDocument();

    // // Check if the nutrition information section is rendered
    // expect(screen.getByText('Nutrition Information')).toBeInTheDocument();
    // expect(screen.getByText('Calories')).toBeInTheDocument();
    // expect(screen.getByText('Total Fat')).toBeInTheDocument();
    // expect(screen.getByText('Saturated Fat')).toBeInTheDocument();
    // expect(screen.getByText('Cholesterol')).toBeInTheDocument();
    // expect(screen.getByText('Sodium')).toBeInTheDocument();
    // expect(screen.getByText('Total Carbohydrates')).toBeInTheDocument();
    // expect(screen.getByText('Dietary Fiber')).toBeInTheDocument();
    // expect(screen.getByText('Sugars')).toBeInTheDocument();
    // expect(screen.getByText('Protein')).toBeInTheDocument();
  });
});
