import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeListPage from '../pages/RecipeListPage';

// Mocking the components used in RecipeListPage
jest.mock('../components/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer Component</div>);
jest.mock('../components/RecipeCard', () => ({ title, image, time, difficulty }) => (
  <div data-testid={`recipe-card-${title}`}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{time}</p>
    <p>{difficulty}</p>
  </div>
));
jest.mock('../components/SearchBar', () => () => <div data-testid="search-bar">SearchBar Component</div>);

describe('RecipeListPage Component', () => {
  test('renders RecipeListPage component correctly', () => {
    render(<RecipeListPage />);

    // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Check if SearchBar is rendered
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();

    // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();

  });
});
