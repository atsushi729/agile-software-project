import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

// Mock useNavigate directly
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('RecipeCard Component', () => {
  const mockNavigate = jest.fn();

  // Manually override the useNavigate mock to return the mockNavigate function
  beforeEach(() => {
    jest.clearAllMocks();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
  });

  const props = {
    id: '1',
    title: 'Test Recipe',
    image: 'test-image.jpg',
    time: 30,
    difficulty: 'Medium',
  };

  test('renders RecipeCard component correctly', () => {
    render(
      <BrowserRouter>
        <RecipeCard {...props} />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(props.title);
    const imageElement = screen.getByAltText(props.title);
    const timeElement = screen.getByText(/Time: 30 minutes/i);
    const difficultyElement = screen.getByText(/Difficulty: Medium/i);

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(difficultyElement).toBeInTheDocument();
  });

  test('navigates to the correct recipe page on click', () => {
    render(
      <BrowserRouter>
        <RecipeCard {...props} />
      </BrowserRouter>
    );

    const cardElement = screen.getByRole('img', { name: props.title }).closest('div');
    fireEvent.click(cardElement);

    expect(mockNavigate).toHaveBeenCalledWith(`/recipe/${props.id}`);
  });
});
