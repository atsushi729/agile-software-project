import React, { useRef } from "react";
import "./GenerateRecipePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./RecipePage.css";

const GenerateRecipePage = () => {
  const [recipe, setRecipe] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const loadingRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setRecipe(null);

    setTimeout(() => {
      if (loadingRef.current) {
        loadingRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);

    const ingredients = event.target.elements.ingredients.value
      .split(",")
      .map((ingredient) => ingredient.trim());
    const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:3000";

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
        setRecipe(data.recipe);
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
        <div className="loading-container" ref={loadingRef}>
          <div className="spinner"></div>
          <p className="loading-text">Generating...</p>
        </div>
      )}
      {recipe && (
        <div className="recipe-container">
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <img src={recipe.image} alt={recipe.title} />
          <section className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span>{index + 1}</span> {ingredient}{" "}
                  <input type="checkbox" />
                </li>
              ))}
            </ul>
          </section>
          <section className="recipe-directions">
            <h2>Directions</h2>
            <ul>
              {Object.entries(recipe.instructions).map(([key, value]) => (
                <li key={key}>
                  <span>{key}</span> {value} <input type="checkbox" />
                </li>
              ))}
            </ul>
          </section>
          <section className="nutrition-info">
            <h2>Nutrition Information</h2>
            <table>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td>{recipe.nutrition.calories}</td>
                </tr>
                <tr>
                  <td>Total Fat</td>
                  <td>{recipe.nutrition.totalFat}</td>
                </tr>
                <tr>
                  <td>Saturated Fat</td>
                  <td>{recipe.nutrition.saturatedFat}</td>
                </tr>
                <tr>
                  <td>Cholesterol</td>
                  <td>{recipe.nutrition.cholesterol}</td>
                </tr>
                <tr>
                  <td>Sodium</td>
                  <td>{recipe.nutrition.sodium}</td>
                </tr>
                <tr>
                  <td>Total Carbohydrates</td>
                  <td>{recipe.nutrition.totalCarbohydrates}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default GenerateRecipePage;
