import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArticlePage from '../pages/ArticleListPage';
import '@testing-library/jest-dom/extend-expect';
// Mocking the components that are already tested individually
jest.mock('../components/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer Component</div>);
jest.mock('../components/ArticleCard', () => (props) => (
  <div data-testid={`article-card-${props.id}`}>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <p>{props.date}</p>
  </div>
));

describe('ArticlePage Component', () => {
  test('renders ArticlePage component correctly', async () => {
      render(
        <MemoryRouter>
          <ArticlePage />
        </MemoryRouter>
      );

  //   // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

     // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    // Wait for at least 1 article card to be rendered
    await waitFor(() => {
      const articleCard = screen.getByTestId('article-card-1'); 
      expect(articleCard).toBeInTheDocument();
    });
   });
});
