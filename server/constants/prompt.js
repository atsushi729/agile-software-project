const recipePrompt = (ingredients) => `
    Generate a eco friendly recipe with the following specifications and ingredients in JSON format
    description should be longer than 100 words:
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

module.exports = recipePrompt;
