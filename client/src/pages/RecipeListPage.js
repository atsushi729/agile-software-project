import React, { useEffect, useState } from "react";
import "./RecipeListPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import { stubRecipe } from "../constants/stub";
import useFetch from "../hooks/useFetch";

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  // fetch recipe data
  const { data, isLoading, error } = useFetch("/recipes");

  useEffect(() => {
    // Success
    if (data) {
      setRecipes(data.recipes);
      setFilteredRecipes(data.recipes);
    }
    // Error
    if (error) {
      console.error("Error fetching recipes:", error);
      setRecipes(stubRecipe);
      setFilteredRecipes(stubRecipe);
    }
  }, [data, error]);

  const handleSearchResults = (results) => {
    setFilteredRecipes(results);
  };

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
          {isLoading && <p>Loading...</p>}
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
