import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "../pages/HomePage";
import RecipeListPage from "../pages/RecipeListPage";
import GenerateRecipePage from "../pages/GenerateRecipePage";
import ArticlePage from "../pages/ArticlePage";
import RecipePage from "../pages/RecipePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ArticleListPage from "../pages/ArticleListPage";

describe("App Component", () => {
   // Test to see if HomePage renders correctly for the default route "/"
  test("renders HomePage component for default route", () => {
    render( 
      // Simulate routing using memory router
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    );
    // Check if the text is present in the document
    expect(screen.getByText(/Create eco-friendly Recipes/i)).toBeInTheDocument();
  });

   //Check if RecipeListPage renders correctly for the "/recipes" route
  test("renders RecipeListPage component for /recipes route", async () => {
  render(
    <MemoryRouter initialEntries={["/recipes"]}>
      <Routes>
        <Route path="/recipes" element={<RecipeListPage />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    // Wait for the text "Baklava" to appear in the document
    expect(screen.getByText(/Baklava/i)).toBeInTheDocument();
  });
});
  
// Check if GenerateRecipePage renders correctly for the "/create-recipe" route
  test("renders GenerateRecipePage component for /create-recipe route", () => {
    render(
      <MemoryRouter initialEntries={["/create-recipe"]}>
        <Routes>
          <Route path="/create-recipe" element={<GenerateRecipePage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Create Eco-friendly Recipe with AI/i)).toBeInTheDocument();
  });

  // Check if ArticlePage renders correctly for the "/article/:id" route
  test("renders ArticlePage component for /article/:id route", () => {
    render(
      <MemoryRouter initialEntries={["/article/1"]}>
        <Routes>
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Featured Articles/i)).toBeInTheDocument();
  });

  // Check if RecipePage renders correctly for the "/recipe/:id" route
  test("renders RecipePage component for /recipe/:id route", () => {
    render(
      <MemoryRouter initialEntries={["/recipe/1"]}>
        <Routes>
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Ingredients/i)).toBeInTheDocument();
  });

  // Check if About page renders correctly for the "/about" route
  test("renders About component for /about route", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  // Check if Contact page renders correctly for the "/contact" route
  test("renders Contact component for /contact route", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  // Check if ArticleListPage renders correctly for the "/articles" route
  test("renders ArticleListPage component for /articles route", () => {
    render(
      <MemoryRouter initialEntries={["/articles"]}>
        <Routes>
          <Route path="/articles" element={<ArticleListPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Read eco-friendly article/i)).toBeInTheDocument();
  });
});
