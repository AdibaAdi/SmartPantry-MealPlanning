import React from 'react';
import { useParams } from 'react-router-dom';
import './moreInfoStyleSheet/moreinfo.css'; 

// Simulated data fetching function
const findRecipeByTitle = (title) => {
  // Simulate a database of recipes
  const recipes = [
    {
      title: "Pancakes",
      ingredients: ["Egg", "Flour", "Vanilla extract"],
      time: "8 minutes",
      instructions: "1. Mix all the ingredients in a bowl until smooth. 2. Heat a lightly oiled griddle or frying pan over medium-high heat. 3. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot."
    },
    {
      title: "Grilled Cheese",
      ingredients: ["Cheese", "Bread", "Butter"],
      time: "5 minutes",
      instructions: "1. Butter one side of each bread slice. Place one slice, buttered side down, on a skillet over medium heat. 2. Add cheese on top of the bread on the skillet. Cover with the other bread slice, buttered side up. 3. Grill until golden brown and flip to grill the other side until cheese is melted and bread is golden brown."
    },
    {
      title: "Smoothie",
      ingredients: ["Banana", "Milk", "Honey", "Ice"],
      time: "5 minutes",
      instructions: "1. Combine the banana, milk, honey, and ice in a blender. 2. Blend until smooth and creamy. Pour into a glass and serve immediately. Optionally, add a few slices of banana on top for decoration."
    }
  ];

  // Attempt to find and return the recipe that matches the title
  return recipes.find(recipe => recipe.title.toLowerCase() === title.toLowerCase().replace(/-/g, ' '));
};

const MoreInfo = () => {
  const { recipeTitle } = useParams(); // Extract the recipeTitle parameter from the URL
  const recipeDetails = findRecipeByTitle(recipeTitle);

  // Check if recipeDetails exists. If not, display a not found message
  if (!recipeDetails) {
    return <div className="more-info-container">Recipe not found.</div>;
  }

  // If recipeDetails is found, display its content
  return (
    <div className="more-info-container">
      <div className="recipe-header">
        <h1>{recipeDetails.title}</h1>
        <h2>Ingredients:</h2>
        <ul>
          {recipeDetails.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p><strong>Estimated Time:</strong> {recipeDetails.time}</p>
      </div>
      <div className="recipe-instructions">
        <h2>Instructions:</h2>
        <p>{recipeDetails.instructions}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
