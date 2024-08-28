import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

// Mock the components used in HomePage to simplify testing
jest.mock('../components/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer Component</div>);
jest.mock('../components/RecipeCard', () => () => <div data-testid="recipe-card" />);
jest.mock('../components/SearchBar', () => () => <div data-testid="search-bar">SearchBar Component</div>);

describe('HomePage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders HomePage component correctly', () => {
    render(<HomePage />);

    // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Check if SearchBar is rendered
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();

    // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    // Optionally check for the presence of the hero section
    expect(screen.getByText(/Create eco-friendly Recipes/i)).toBeInTheDocument();
  });
});
