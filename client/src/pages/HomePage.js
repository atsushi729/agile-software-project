import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";
import { stubRecipe } from "../constants/stub";
import useFetch from "../hooks/useFetch";

// prettier-ignore
const HomePage = () => {
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
    <>
        <Header />
        <main>
            <section className="hero">
                <div className='hero-group'>
                    <div className='hero-text-container'>
                        <h2>Create eco-friendly Recipes</h2>
                        <p>We will also focus on eco-friendly cooking to help cut down on food waste. </p>
                        <p>You can generate new recipe using generative AI.</p>
                        <button ><a href='/create-recipe'>Get Started</a></button>
                    </div>
                    <div className='hero-image-container'>
                        <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg" alt="Delicious food" className="hero-image" />
                    </div>
                </div>
                <SearchBar list={recipes} onSearch={handleSearchResults}/>
            </section>
            <section className="featured-recipes">
                <h3>Featured Recipes</h3>
                <div className="recipe-grid">
                    {isLoading && <p>Loading...</p>}
                    {filteredRecipes.map((recipes, index) => {
                        return (
                            recipes.featured &&
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
            </section>
        </main>
        <Footer />
    </>
  );
};

export default HomePage;
