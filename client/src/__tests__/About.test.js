import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../pages/About";

// Mocking the components used in the About page
jest.mock("../components/Header", () => () => <div>Header</div>);
jest.mock("../components/Footer", () => () => <div>Footer</div>);

describe("About component", () => {
  beforeEach(() => {
    render(<About />);
  });

  test("renders the About section with correct content", () => {
    //check that page content are rendered correctly
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We are dedicated to promoting eco-friendly cooking practices. Our mission is to reduce food waste and inspire sustainable cooking habits."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Our app allows you to generate new recipes using generative AI, ensuring that you can always find new and exciting ways to use your ingredients."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Join us in our journey to make the world a greener place, one recipe at a time."
      )
    ).toBeInTheDocument();
  });
});
