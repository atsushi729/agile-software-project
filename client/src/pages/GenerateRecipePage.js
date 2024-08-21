import React from "react";
import "./GenerateRecipePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GenerateRecipePage = () => {
  const [recipe, setRecipe] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const ingredients = event.target.elements.ingredients.value
      .split(",")
      .map((ingredient) => ingredient.trim());
    const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:3000";
    console.log(ingredients);

    // Call the API to generate a recipe
    fetch(`${API_ENDPOINT}/generate-recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to generate recipe");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRecipe(data.recipe); // Assuming the response contains a JSON object for the recipe
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error generating recipe:", error);
        setLoading(false);
      });
  };

  return (
    <div className="generate-recipe-page">
      <Header />
      <main>
        <section className="generate-recipe-hero">
          <div className="generate-recipe-hero-overlay"></div>
          <div className="generate-recipe-hero-content">
            <h1>Create Eco-friendly Recipe with AI</h1>
            <form onSubmit={handleSubmit}>
              <input
                name="ingredients"
                type="text"
                placeholder="Enter ingredients"
              />
              <button type="submit">Generate Recipe</button>
            </form>
          </div>
        </section>
      </main>
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}
      {recipe && (
        <div className="recipe-card">
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default GenerateRecipePage;
