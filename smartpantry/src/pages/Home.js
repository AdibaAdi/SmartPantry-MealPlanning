import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './homeStyleSheet/home.css';
import bluefoodimage from './homeStyleSheet/bluefoodimage.jpg';
import './moreInfoStyleSheet/moreinfo.css';

function parseData(recipe_data) {
  let arr = [];

  for (let i = 0; i < recipe_data.length; i++) {
    arr.push({ title: recipe_data[i].recipe_name, ingredients: recipe_data[i].ingredients, time: recipe_data[i].time });
  }
  return arr;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [userResults, setUserResults] = useState([]);
  const inputRef = useRef(null);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "user_name": "JaneCool"
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/recipes/getMyRecipes", requestOptions);
        const data = await response.json();
        setUserResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (inputRef.current) {
        inputRef.current.style.width = 'auto';
        inputRef.current.style.width = `${inputRef.current.scrollWidth + 20}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [searchQuery]);

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/searching/${searchQuery}`);
  };

  let recipes = [];
  if (userResults.length > 0) {
    recipes = parseData(userResults);
  }

  return (
    <div className="home">
      <div className="banner">
        <img src={bluefoodimage} alt="" />
        <div className="search-section">
          <form onSubmit={handleSearchSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search recipe by name, ingredients, etc."
                className="search-input"
                onChange={handleSearchInput}
                value={searchQuery}
                ref={inputRef}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="recipes-container">
        <div className="recipes-header">
          <h1 className="my-recipes">My Recipes</h1>
          <Link to="/CreateRecipe"><span className="create-recipe">Create a Recipe</span></Link>
        </div>
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <div className="recipe-details">
              <div className="recipe-title">{recipe.title}</div>
              <strong>Ingredients:</strong>
              <ul>
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-time-more">
              Estimated Time: {recipe.time}
              <div>
                <Link to={`/recipe-details/${recipe.title.replace(/\s+/g, '-').toLowerCase()}`} className="more-link">More →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="recently-searched-container">
        <h2 className="recent-searches">Recently Searched Ingredients</h2>
        <div className="ingredients-grid">
          {["Carrots", "Broth", "Watermelon", "Pumpkin Seeds", "Tomatoes", "Cucumber", "Spinach", "Mushrooms", "Chicken", "Rice", "Beans", "Cheese"].map((ingredient, index) => (
            <span key={index} className="ingredient">
              <span className="bullet">⚫</span><span className="ingredient-text">{ingredient}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;