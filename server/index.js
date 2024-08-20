const express = require("express");
const application = express();
const connect = require("./db");
const Recipe = require("./models/recipe");
const Article = require("./models/article");
const cors = require("cors");
const { OpenAI } = require("openai");
require("dotenv").config(); // Load environment variables

// Connect to the database
connect();

// Middleware
application.use(express.json());
application.use(cors());

// OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Route to generate a recipe
application.post("/generate-recipe", async (request, response) => {
  const { ingredients } = request.body;

  const prompt = `
    Generate a recipe with the following specifications and ingredients in JSON format:
    Ingredients: ${ingredients.join(", ")}
    {
      id: 1,
      title: "Baklava",
      author: "John Doe",
      difficulty: "Easy",
      featured: true,
      time: 30,
      rating: 4.5,
      description: "This is a delicious recipe that is also eco-friendly.",
      ingredients: [
        "1 cup of flour",
        "1 cup of sugar",
        "1 cup of milk",
        "1 cup of butter",
      ],
      instructions: {
        1: "Mix the flour and sugar together.",
        2: "Add the milk and butter to the mixture.",
        3: "Bake in the oven for 30 minutes.",
      },
      nutrition: {
        calories: "200",
        totalFat: "10g",
        saturatedFat: "5g",
        cholesterol: "50mg",
        sodium: "500mg",
        totalCarbohydrates: "20g",
      },
      movie: "https://www.youtube.com/watch?v=uxJe1cEr1Ts",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    Provide the recipe in this exact JSON format.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 2048,
      temperature: 0.7,
    });

    // Assuming the completion contains JSON data as a string
    const recipe = JSON.parse(completion.choices[0].message.content);

    console.log("Generated recipe:", recipe);
    return response.json({ recipe });
  } catch (error) {
    console.error("Error generating recipe:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
});

// Routes
application.get("/recipes", async (request, response) => {
  try {
    const recipes = await Recipe.find({});
    return response.json({ recipes });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get a recipe by ID
application.get("/recipe/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return response.status(404).json({ error: "Recipe not found" });
    }
    return response.json({ recipe });
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
});

application.get("/articles", async (request, response) => {
  try {
    const articles = await Article.find({});
    return response.json({ articles });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
});

application.get("/article/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const article = await Article.findById(id);
    if (!article) {
      return response.status(404).json({ error: "Article not found" });
    }
    return response.json({ article });
  } catch (error) {
    console.error("Error fetching article:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
application.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
