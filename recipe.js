// Create an object to hold information on your favourite recipes. It should have properties for:

// recipeTitle (a string)

// servings (a number)

// ingredients (an array of strings)

// directions (a string)

// List all recipes

// Create a loop to list all the ingredients.


//  First try - one recipe object syntax practise 
// const ramenRecipe = {

// recipeTitle: "Homemade Ramen",
// servings: 2,
// ingredients: [
//     "2 packs of ramen noodles",
//     "4 cups of chicken broth",
//     "2 garlic cloves, minced",
//     "1 inch of fresh ginger, grated",
//     "2 tablespoons of soy sauce",
//     "2 tablespoons of miso paste",
//     "2 green onions, sliced",
//     "2 boiled eggs, sliced in half",
//     "1 cup of sliced mushrooms",
//     "1 cup of baby spinach",
// ],
//   directions: [ 
//     "In a pot, bring the chicken broth to a boil.",
//     "Add the garlic, ginger, soy sauce, and miso paste.",
//     "Stir until the miso paste is dissolved.",
//     "Add the ramen noodles and mushrooms.",
//     "Cook for 3-4 minutes until the noodles are tender.",
//     "Add the baby spinach and stir until wilted.",
//     "Divide the ramen into two bowls.",
//     "Top each bowl with green onions and a boiled egg half.",
//     "Serve hot."
//   ]

// }; 
  
// console.log(ramenRecipe);

// More than one recipe - task 2 


const recipes = [
    {
      recipeTitle: "Spaghetti Bolognese",
      servings: 4,
      ingredients: ["500g spaghetti", "400g canned tomatoes", "1 onion, chopped", "2 garlic cloves, minced", "500g ground beef", "1 tbsp olive oil", "1 tbsp tomato paste", "1 tsp dried oregano", "1 tsp dried basil", "1/2 tsp salt", "1/4 tsp black pepper"],
      directions: ["1. Cook spaghetti according to package instructions.", "2. Heat olive oil in a large pan.", "3. Add onion and garlic and cook until softened.",  "4. Add ground beef and cook until browned.", "5. Add canned tomatoes, tomato paste, oregano, basil, salt and pepper.", "6. Simmer for 20-25 minutes.", "7. Serve the sauce over the spaghetti."]
    },
    {
      recipeTitle: "Chocolate Chip Cookies",
      servings: 24,
      ingredients: ["2 1/4 cups all-purpose flour", "1 tsp baking soda", "1 tsp salt", "1 cup unsalted butter, softened", "3/4 cup white sugar", "3/4 cup brown sugar", "2 large eggs", "1 tsp vanilla extract", "2 cups semisweet chocolate chips"],
      directions: ["1. Preheat oven to 375°F (190°C).", "2. In a small bowl, whisk together flour, baking soda, and salt.", "3. In a large bowl, cream together butter, white sugar, and brown sugar until smooth.", "4. Beat in eggs and vanilla extract.", "5. Gradually add flour mixture and mix until just combined.", "6. Stir in chocolate chips.", "7. Drop rounded tablespoons of dough onto ungreased baking sheets.", "8. Bake for 8-10 minutes.", "9. Cool on baking sheet for 2 minutes before removing to cool completely."]
    },
    {
        recipeTitle: "Homemade Ramen",
        servings: 2,
        ingredients: ["2 packs of ramen noodles", "4 cups of chicken broth","2 garlic cloves, minced", "1 inch of fresh ginger, grated", "2 tablespoons of soy sauce", "2 tablespoons of miso paste", "2 green onions, sliced", "2 boiled eggs, sliced in half", "1 cup of sliced mushrooms", "1 cup of baby spinach",],
        directions: ["In a pot, bring the chicken broth to a boil.","Add the garlic, ginger, soy sauce, and miso paste.", "Stir until the miso paste is dissolved.", "Add the ramen noodles and mushrooms.", "Cook for 3-4 minutes until the noodles are tender.", "Add the baby spinach and stir until wilted.", "Divide the ramen into two bowls.", "Top each bowl with green onions and a boiled egg half.", "Serve hot."]
      }
  ];
  
  // loop through the recipes and log recipe title, servings, and directions
  recipes.forEach((recipe) => {
    console.log(recipe.recipeTitle);
    console.log("Servings: " + recipe.servings);
    console.log("Directions: " + recipe.directions);
  });
//   adds an extra blank line between the output of the loop and any other console output that comes after it.
  console.log("\n");
  
  // loop through the recipes and list all the ingredients
  recipes.forEach((recipe) => {
    console.log(recipe.recipeTitle);
    console.log("Ingredients:");
    recipe.ingredients.forEach((ingredient) => {
      console.log("- " + ingredient);
    });

    // adds an extra blank line between the output of the loop and any other console output that comes after it.
    console.log("\n");
      });

    // Method called letsCook! - method is essentially the same as a function 

    function letsCook (recipe) {
        console.log(`I'm hungry! Let's cook... ${recipe.recipeTitle}.`);
    
        
  }

//   Call the function/method using numbers

  letsCook(recipes[2]);


  
