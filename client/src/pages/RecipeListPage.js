import React, { useEffect, useState } from "react";
import "./RecipeListPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import { stubRecipe } from "../constants/stub";

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearchResults = (results) => {
    setFilteredRecipes(results);
  };

  useEffect(() => {
    const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:3000";

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/recipes`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();
        const data = JSON.parse(text);
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);
      } catch (error) {
        console.error("Error parsing JSON or network issue:", error);
        setRecipes(stubRecipe);
        setFilteredRecipes(stubRecipe);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="recipe-list-page">
      <Header />
      <main>
        <section className="header-hero">
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>Read eco-friendly recipe or article</h1>
            <p>
              We will also focus on eco-friendly cooking to help cut down on
              food waste. You can generate new recipe using generative AI.
            </p>
          </div>
        </section>
        <SearchBar list={recipes} onSearch={handleSearchResults} />
        <div className="recipe-list">
          {filteredRecipes.map((recipes, index) => {
            return (
              <RecipeCard
                key={index}
                id={recipes._id}
                title={recipes.title}
                image={recipes.image}
                time={recipes.time}
                difficulty={recipes.difficulty}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecipeListPage;
