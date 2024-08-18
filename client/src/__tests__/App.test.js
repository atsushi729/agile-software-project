import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mocking the pages that are already tested individually
jest.mock('../pages/HomePage', () => () => <div data-testid="home-page">HomePage Component</div>);
jest.mock('../pages/RecipeListPage', () => () => <div data-testid="recipe-list-page">RecipeListPage Component</div>);
jest.mock('../pages/GenerateRecipePage', () => () => <div data-testid="generate-recipe-page">GenerateRecipePage Component</div>);
jest.mock('../pages/ArticlePage', () => () => <div data-testid="article-page">ArticlePage Component</div>);
jest.mock('../pages/RecipePage', () => () => <div data-testid="recipe-page">RecipePage Component</div>);
jest.mock('../pages/About', () => () => <div data-testid="about-page">About Page Component</div>);
jest.mock('../pages/Contact', () => () => <div data-testid="contact-page">Contact Page Component</div>);
jest.mock('../pages/ArticleListPage', () => () => <div data-testid="article-list-page">ArticleListPage Component</div>);

describe('App Component', () => {
  test('renders HomePage component on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App useRouter={false} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('renders RecipeListPage component on /recipes route', () => {
    render(
      <MemoryRouter initialEntries={['/recipes']}>
        <App useRouter={false} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('recipe-list-page')).toBeInTheDocument();
  });

  test('renders GenerateRecipePage component on /create-recipe route', () => {
    render(
      <MemoryRouter initialEntries={['/create-recipe']}>
        <App useRouter={false} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('generate-recipe-page')).toBeInTheDocument();
  });

  test('renders ArticlePage component on /article-page route', () => {
    render(
      <MemoryRouter initialEntries={['/article-page']}>
        <App useRouter={false} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('article-page')).toBeInTheDocument();
  });

  test('renders RecipePage component on /recipe-page route', () => {
    render(
      <MemoryRouter initialEntries={['/recipe-page']}>
        <App useRouter={false} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('recipe-page')).toBeInTheDocument();
  });

  test('renders About component on /about route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App useRouter={false} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('renders Contact component on /contact route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App useRouter={false} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('contact-page')).toBeInTheDocument();
  });

  test('renders ArticleListPage component on /articles route', () => {
    render(
      <MemoryRouter initialEntries={['/articles']}>
        <App useRouter={false} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('article-list-page')).toBeInTheDocument();
  });
});
