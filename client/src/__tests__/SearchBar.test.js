import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  const mockList = [
    { title: 'Test Recipe 1' },
    { title: 'Another Recipe' },
  ];

  const mockOnSearch = jest.fn();

  test('renders SearchBar component correctly', () => {
    render(<SearchBar list={mockList} onSearch={mockOnSearch} />);

    // Check if the filter button is rendered correctly
    const filterButton = screen.getByTestId('filter-button');
    expect(filterButton).toBeInTheDocument();

    // Check if the search input is rendered correctly
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    // Check if the search button is rendered correctly
    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toBeInTheDocument();
  });

  test('search input accepts text', () => {
    render(<SearchBar list={mockList} onSearch={mockOnSearch} />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'test search' } });

    expect(searchInput.value).toBe('test search');
  });

  test('filter button is clickable', () => {
    render(<SearchBar list={mockList} onSearch={mockOnSearch} />);

    const filterButton = screen.getByTestId('filter-button');
    fireEvent.click(filterButton);

    expect(filterButton).toBeInTheDocument();
  });

  test('search button is clickable', () => {
    render(<SearchBar list={mockList} onSearch={mockOnSearch} />);

    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalled();  // Check if the onSearch function was called
  });
});
