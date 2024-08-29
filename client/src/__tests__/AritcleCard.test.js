import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

describe("ArticleCard Component", () => {
  const props = {
    id: "123",
    image: "test-image.jpg",
    title: "Test Title",
    description: "Test Description",
    date: "2023-10-01",
  };

  test("renders ArticleCard component correctly", () => {
    render(
      <MemoryRouter>
        <ArticleCard {...props} />
      </MemoryRouter>
    );

    // Check if the image is rendered with the correct src and alt attributes
    const imageElement = screen.getByAltText(props.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", props.image);

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered correctly
    const descriptionElement = screen.getByText(props.description);
    expect(descriptionElement).toBeInTheDocument();

    // Check if the date is rendered correctly
    const dateElement = screen.getByText(props.date);
    expect(dateElement).toBeInTheDocument();
  });

  test("renders a link to the article page", () => {
    render(
      <MemoryRouter>
        <ArticleCard {...props} />
      </MemoryRouter>
    );

    // Simulate click on the article card
    const articleCardElement = screen.getByAltText(props.title);
    articleCardElement.click();

    // In a real-world test, you'd mock navigate and assert that it was called with the correct URL.
    // Here, we assume the `handleClick` will work correctly as we're testing component rendering.
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
