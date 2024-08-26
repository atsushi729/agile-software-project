import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RecipeListPage from "../pages/RecipeListPage";
import GenerateRecipePage from "../pages/GenerateRecipePage";
import ArticlePage from "../pages/ArticlePage";
import RecipePage from "../pages/RecipePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ArticleListPage from "../pages/ArticleListPage";

describe("App Component", () => {
  test("renders HomePage component for default route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Create eco-friendly Recipes/i)).toBeInTheDocument();
  });

  test("renders RecipeListPage component for /recipes route", () => {
    render(
      <MemoryRouter initialEntries={["/recipes"]}>
        <Routes>
          <Route path="/recipes" element={<RecipeListPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Featured Recipes/i)).toBeInTheDocument();
  });

  test("renders GenerateRecipePage component for /create-recipe route", () => {
    render(
      <MemoryRouter initialEntries={["/create-recipe"]}>
        <Routes>
          <Route path="/create-recipe" element={<GenerateRecipePage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Generate a new recipe/i)).toBeInTheDocument();
  });

  test("renders ArticlePage component for /article/:id route", () => {
    render(
      <MemoryRouter initialEntries={["/article/1"]}>
        <Routes>
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Article Details/i)).toBeInTheDocument();
  });

  test("renders RecipePage component for /recipe/:id route", () => {
    render(
      <MemoryRouter initialEntries={["/recipe/1"]}>
        <Routes>
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Recipe Details/i)).toBeInTheDocument();
  });

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
