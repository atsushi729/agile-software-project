import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArticleListPage from '../pages/ArticleListPage';
import '@testing-library/jest-dom/extend-expect';

// Mocking components
jest.mock('../components/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer Component</div>);
jest.mock('../components/SearchBar', () => () => <div data-testid="search-bar">SearchBar Component</div>);

jest.mock('../components/ArticleCard', () => (props) => (
  <div data-testid={`article-card-${props.id}`}>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <p>{props.date}</p>
  </div>
));
describe('ArticleListPage Component', () => {
  test('renders ArticleListPage component correctly', async () => {
    render(
      <MemoryRouter>
        <ArticleListPage />
      </MemoryRouter>
    );

    // Check that the Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Check that the Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    // // Check that the SearchBar is rendered
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();

    // Wait for the single article card to be rendered with the hardcoded ID
    await waitFor(() => {
      const articleCard = screen.getByTestId('article-card-1'); // Checking for hardcoded ID '1'
      expect(articleCard).toBeInTheDocument();
    });
  });
});
