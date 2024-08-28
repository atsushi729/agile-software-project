import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

// Mock useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('RecipeCard Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    // Set up the mock return value for useNavigate
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
  });

  const props = {
    id: '1',
    image: 'test-image.jpg',
    title: 'Test Recipe',
    time: 30,
    difficulty: 'Medium',
  };

  test('renders RecipeCard component correctly', () => {
    render(
      <MemoryRouter>
        <RecipeCard {...props} />
      </MemoryRouter>
    );

    // Check if the image is rendered with the correct src and alt attributes
    const imageElement = screen.getByAltText(props.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', props.image);

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the time is rendered correctly
    const timeElement = screen.getByText(/Time: 30 minutes/i);
    expect(timeElement).toBeInTheDocument();

    // Check if the difficulty is rendered correctly
    const difficultyElement = screen.getByText(/Difficulty: Medium/i);
    expect(difficultyElement).toBeInTheDocument();
  });

  test('navigates to the correct recipe page on click', () => {
    render(
      <MemoryRouter>
        <RecipeCard {...props} />
      </MemoryRouter>
    );

    // Simulate click on the recipe card
    const cardElement = screen.getByAltText(props.title).closest('div');
    fireEvent.click(cardElement);

    // Check if navigate function is called with the correct URL
    expect(mockNavigate).toHaveBeenCalledWith(`/recipe/${props.id}`);
  });
});
