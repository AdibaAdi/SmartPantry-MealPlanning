import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './searchingStyleSheet/searching.css';
import transparentImage from './searchingStyleSheet/transparent.png';


const Searching = () => {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    setIsLoading(true); // Set loading state to true before fetching data

    fetch(`http://localhost:8000/api/recipes/search/${searchQuery}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const myArr = [];

        for (let i = 0; i < result.length; i++) {
          const recipe = result[i].recipe;
          myArr.push({
            name: recipe.label,
            servings: recipe.yield,
            ingredients: recipe.ingredients
          });
        }

        setSearchResults(myArr);
        setIsLoading(false); // Set loading state to false after fetching data
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set loading state to false if there's an error
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
          </div>
        ))
      ) : (
        <p>No recipes found for "{searchQuery}".</p>
      )}
    </div>
  );
};

export default Searching;