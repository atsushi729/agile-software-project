import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import ArticlePage from "./pages/ArticlePage";
import GenerateRecipePage from "./pages/GenerateRecipePage";
import RecipeListPage from "./pages/RecipeListPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArticleListPage from "./pages/ArticleListPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/montserrat";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipeListPage />} />
          <Route path="/create-recipe" element={<GenerateRecipePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<ArticleListPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
