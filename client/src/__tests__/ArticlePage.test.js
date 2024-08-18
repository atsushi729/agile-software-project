import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlePage from '../pages/ArticlePage';
import '@testing-library/jest-dom/extend-expect';

// Mocking the components that are already tested individually
jest.mock('../components/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer Component</div>);
jest.mock('../components/ArticleCard', () => (props) => (
  <div data-testid={`article-card-${props.title}`}>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
  </div>
));

describe('ArticlePage Component', () => {
  test('renders ArticlePage component correctly', () => {
    render(<ArticlePage />);

    // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    // Check if main elements are rendered
    expect(screen.getByRole('heading', { level: 1, name: /Best Ever Fish and Chips Recipe/i })).toBeInTheDocument();
    expect(screen.getByText(/By Author Name/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Fish and Chips/i })).toBeInTheDocument();

    // Check if article content is rendered
    expect(screen.getByText(/When you want your whole family to adopt healthier eating habits/i)).toBeInTheDocument();
    expect(screen.getByText(/Family-friendly meal planning for the Mediterranean diet lets/i)).toBeInTheDocument();

    // Check if Featured Articles section is rendered
    expect(screen.getByRole('heading', { level: 3, name: /Featured Articles/i })).toBeInTheDocument();

    // Check if ArticleCards are rendered
    const articleTitles = [
      'Healthy life recipe',
      'Eco friendly recipe',
      'Recipe life article'
    ];

    articleTitles.forEach(title => {
      const articleCard = screen.getByTestId(`article-card-${title}`);
      expect(articleCard).toBeInTheDocument();
      expect(articleCard).toHaveTextContent(title);
    });
  });
});
