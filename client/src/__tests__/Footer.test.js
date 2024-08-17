import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

describe('Footer Component', () => {

  // Helper function to render the component with Router
  const renderWithRouter = (ui) => {
    return render(
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    );
  };

  test('renders the footer logo correctly', () => {
    renderWithRouter(<Footer />);
    const logoElement = screen.getByText(/Chef AI/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders the footer links correctly', () => {
    renderWithRouter(<Footer />);
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
  });

  test('renders the social media links correctly', () => {
    renderWithRouter(<Footer />);
    const facebookLink = screen.getByLabelText('Facebook');
    const twitterLink = screen.getByLabelText('Twitter');
    const instagramLink = screen.getByLabelText('Instagram');
  
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com');
  });
  
});
