import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  test('renders SearchBar component correctly', () => {
    render(<SearchBar />);

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
    render(<SearchBar />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'test search' } });

    expect(searchInput.value).toBe('test search');
  });

  test('filter button is clickable', () => {
    render(<SearchBar />);

    const filterButton = screen.getByTestId('filter-button');
    fireEvent.click(filterButton);

    expect(filterButton).toBeInTheDocument(); // This is just to verify the button is clickable; you can add more logic if needed
  });

  test('search button is clickable', () => {
    render(<SearchBar />);

    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);

    expect(searchButton).toBeInTheDocument(); // This is just to verify the button is clickable; you can add more logic if needed
  });
});
