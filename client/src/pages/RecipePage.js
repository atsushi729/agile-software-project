import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./RecipePage.css";
import { stubRecipe } from "../constants/stub";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:3000";

    // Fetch recipe data from the API
    fetch(`${API_ENDPOINT}/recipe/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Recipe not found");
        }
        return response.json();
      })
      .then((data) => {
        setRecipe(data.recipe);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setRecipe(stubRecipe[id]); // Use stub data in case of error
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>No recipe found</div>;
  }

  // Ensure recipe.movie is a valid URL before processing
  const videoId = recipe.movie ? getYouTubeVideoId(recipe.movie) : null;
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : "";

  return (
    <div>
      <Header />
      <main className="recipe-main">
        <section className="recipe-hero">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <div className="recipe-details">
            <h1>{recipe.title}</h1>
            <p className="recipe-author">by {recipe.author}</p>
            <div className="recipe-rating">
              <span>{"★".repeat(Math.round(recipe.rating))}</span>
            </div>
            <p className="recipe-description">{recipe.description}</p>
            <div className="recipe-buttons">
              <button className="save-button">Save recipe</button>
              <button className="print-button">Print recipe</button>
            </div>
          </div>
        </section>
        <section className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span>{index + 1}</span> {ingredient} <input type="checkbox" />
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
        <section className="recipe-video">
          <h2>How to cook</h2>
          <div className="video-placeholder">
            {embedUrl && (
              <iframe
                width="560"
                height="315"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default RecipePage;

// Private functions
function getYouTubeVideoId(url) {
  const regex =
    /(?:https?:\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?v%3D|watch\?.+&v=|v%2F|.+\?v=)?([^"&?/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
