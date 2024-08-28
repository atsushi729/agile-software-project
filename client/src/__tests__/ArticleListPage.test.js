// prettier-ignore
import React from 'react';
import { render, screen } from "@testing-library/react";
import ArticleListPage from "../pages/ArticleListPage";
import "@testing-library/jest-dom/extend-expect";

// Mocking the components that are already tested individually
jest.mock("../components/Header", () => () => (
  <div data-testid="header">Header Component</div>
));
jest.mock("../components/Footer", () => () => (
  <div data-testid="footer">Footer Component</div>
));
jest.mock("../components/ArticleCard", () => (props) => (
  <div data-testid={`article-card-${props.title}`}>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <p>{props.date}</p>
  </div>
));
jest.mock("../components/SearchBar", () => () => (
  <div data-testid="search-bar">SearchBar Component</div>
));

describe("ArticleListPage Component", () => {
  test("renders ArticleListPage component correctly", () => {
    render(<ArticleListPage />);

    // Check if Header is rendered
    expect(screen.getByTestId("header")).toBeInTheDocument();

    // Check if Footer is rendered
    expect(screen.getByTestId("footer")).toBeInTheDocument();

    // Check if SearchBar is rendered
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();

    // Check if ArticleCards are rendered
    const articleTitles = [
      "Article Title 1",
      "Article Title 2",
      "Article Title 3",
    ];

    articleTitles.forEach((title) => {
      const articleCard = screen.getByTestId(`article-card-${title}`);
      expect(articleCard).toBeInTheDocument();
      expect(articleCard).toHaveTextContent(title);
    });
  });
});
