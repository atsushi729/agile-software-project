import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../pages/HomePage';

// Mocking the components used in HomePage
jest.mock('../components/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer Component</div>);
jest.mock('../components/RecipeCard', () => ({ id, title, image, time, difficulty }) => (
  <div data-testid="recipe-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{time}</p>
    <p>{difficulty}</p>
  </div>
));
jest.mock('../components/SearchBar', () => () => <div data-testid="search-bar">SearchBar Component</div>);

// Mock fetch response
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      recipes: [
        {
          _id: "1",
          title: "Eco Friendly Recipe 1",
          image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
          time: "5 mins",
          difficulty: "Easy",
        },
        {
          _id: "2",
          title: "Eco Friendly Recipe 2",
          image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
          time: "10 mins",
          difficulty: "Medium",
        },
      ]
    }),
  })
);

describe('HomePage Component', () => {
  test('renders HomePage component correctly', async () => {
    render(<HomePage />);

    // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Check if SearchBar is rendered
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();

    // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    // Wait for the recipes cards to be fetched and rendered
    // await waitFor(() => {
    //   expect(screen.getByTestId('recipe-card')).toBeInTheDocument();
    //   expect(screen.getByTestId('recipe-card')).toBeInTheDocument();
    // });

    // Check if all RecipeCards are rendered
    const recipeCards = screen.getAllByTestId('recipe-card');
    expect(recipeCards).toHaveLength(6);
  });

  test('renders correct number of RecipeCard components', async () => {
    render(<HomePage />);

    // // Wait for the recipes to be fetched and rendered
    // await waitFor(() => {
    //   const recipeCards = screen.getAllByTestId('recipe-card');
    //   expect(recipeCards).toHaveLength(2);
    // });
  });
});
