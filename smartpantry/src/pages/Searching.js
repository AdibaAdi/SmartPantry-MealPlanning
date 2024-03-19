import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './searchingStyleSheet/searching.css';
import transparentImage from './searchingStyleSheet/transparent.png';

const Searching = () => {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const saveRecipe = async (recipe) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const isValidTime = typeof recipe.totalTime === 'number' && isFinite(recipe.totalTime);
      const time = isValidTime ? recipe.totalTime : 0; // Set a default value if totalTime is not a valid number
  
      const raw = JSON.stringify({
        recipe_name: recipe.name,
        ingredients: recipe.ingredients.map(ingredient => `${ingredient.text}`),
        time,
        steps: recipe.instructions || [],
        user_name: localStorage.getItem("username"),
        description: recipe.source || '' // Set a default value if recipe.source is undefined
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
  
      const response = await fetch("http://localhost:8000/api/recipes/addRecipe", requestOptions);
      const data = await response.json();
      console.log(data); // Handle the response from the server
  
      // After the recipe is successfully saved, dispatch the 'recipeSaved' event
      window.dispatchEvent(new Event('recipeSaved'));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    setIsLoading(true);

    fetch(`http://localhost:8000/api/recipes/search/${searchQuery}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const myArr = [];
        for (let i = 0; i < result.length; i++) {
          const recipe = result[i].recipe;
          myArr.push({ name: recipe.label, servings: recipe.yield, ingredients: recipe.ingredients });
        }
        setSearchResults(myArr);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [searchQuery]);

  return (
    <div className="search-results-container">
      <div className="bottom-left-image">
        <img src={transparentImage} alt="Transparent Image" />
      </div>
      <p id="test"></p>
      <h1>Search Results for: {searchQuery}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <div key={index} className="recipe-result">
            <h2>{result.name}</h2>
            <p>Servings: {result.servings}</p>
            <h3>Ingredients:</h3>
            <ul>
              {result.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient.text}</li>
              ))}
            </ul>
            <button onClick={() => saveRecipe(result)}>Save Recipe</button>
          </div>
        ))
      ) : (
        <p>No recipes found for "{searchQuery}".</p>
      )}
    </div>
  );
};

export default Searching;