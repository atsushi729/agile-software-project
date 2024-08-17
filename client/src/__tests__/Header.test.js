import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component', () => {

  // Helper function to render the component with Router
  const renderWithRouter = (ui) => {
    return render(
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    );
  };

  test('renders the header logo correctly', () => {
    renderWithRouter(<Header />);
    const logoElement = screen.getByText(/Chef AI/i);
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.closest('a')).toHaveAttribute('href', '/');
  });

  test('renders the navigation links correctly', () => {
    renderWithRouter(<Header />);
    
    const homeLink = screen.getByText(/Home/i);
    const recipesLink = screen.getByText(/Recipes/i);
    const createRecipeLink = screen.getByText(/Create Recipe/i);
    const articlesLink = screen.getByText(/Articles/i);

    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    
    expect(recipesLink).toBeInTheDocument();
    expect(recipesLink.closest('a')).toHaveAttribute('href', '/recipes');
    
    expect(createRecipeLink).toBeInTheDocument();
    expect(createRecipeLink.closest('a')).toHaveAttribute('href', '/create-recipe');
    
    expect(articlesLink).toBeInTheDocument();
    expect(articlesLink.closest('a')).toHaveAttribute('href', '/articles');
  });

});
