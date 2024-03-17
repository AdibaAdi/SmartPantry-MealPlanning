import React from 'react';
import { useParams } from 'react-router-dom';
import './searchingStyleSheet/searching.css'; // Adjust the path as necessary

const Searching = () => {
  const { searchQuery } = useParams(); // Get the search query from the URL parameter

  // Simulated search results for "chicken"
  const searchResults = searchQuery.toLowerCase() === 'chicken' ? [
    {
      title: "Chicken Alfredo",
      ingredients: ["Chicken breast", "Butter", "Heavy cream", "Parmesan cheese", "Pasta"],
      instructions: "Cook pasta. Sauté chicken. Mix butter, cream, and cheese. Combine all."
    },
    {
      title: "Chicken Salad",
      ingredients: ["Chicken", "Mayonnaise", "Celery", "Onion", "Lettuce"],
      instructions: "Mix chopped chicken with mayonnaise, celery, and onion. Serve on lettuce."
    }
  ] : [];

  return (
    <div className="search-results-container">
      <h1>Search Results for: {searchQuery}</h1>
      {searchResults.length > 0 ? (
        searchResults.map((recipe, index) => (
          <div key={index} className="recipe-result">
            <h2>{recipe.title}</h2>
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))
      ) : (
        <p>No recipes found for "{searchQuery}".</p>
      )}
    </div>
  );
};

export default Searching;
