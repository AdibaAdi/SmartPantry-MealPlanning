import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './homeStyleSheet/home.css';
import bluefoodimage from './homeStyleSheet/bluefoodimage.jpg';
import './moreInfoStyleSheet/moreinfo.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

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

  const recipes = [
    { title: "Pancakes", ingredients: ["Egg", "Flour", "Vanilla extract"], time: "8 minutes" },
    { title: "Grilled Cheese", ingredients: ["Cheese", "Bread", "Butter"], time: "5 minutes" },
    { title: "Smoothie", ingredients: ["Banana", "Milk", "Honey", "Ice"], time: "5 minutes" },
  ];

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/searching/${searchQuery}`);
  };

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
      {/* Container for recipes */}
      <div className="recipes-container">
        <div className="recipes-header">
          <h1 className="my-recipes">My Recipes</h1>
          <Link to="/CreateRecipe"><span className="create-recipe">Create a Recipe</span></Link>
        </div>
        {/* Mapping through recipes */}
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <div className="recipe-details">
              {/* Recipe Title */}
              <div className="recipe-title">{recipe.title}</div>
              <strong>Ingredients:</strong>
              <ul>
                {/* Mapping through ingredients */}
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-time-more">
              {/* Recipe Time */}
              Estimated Time: {recipe.time}
              {/* More Link */}
              <div>
                <Link to={`/recipe-details/${recipe.title.replace(/\s+/g, '-').toLowerCase()}`} className="more-link">More →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Container for recently searched ingredients */}
      <div className="recently-searched-container">
        <h2 className="recent-searches">Recently Searched Ingredients</h2>
        <div className="ingredients-grid">
          {/* Mapping through recently searched ingredients */}
          {["Carrots", "Broth", "Watermelon", "Pumpkin Seeds", "Tomatoes", "Cucumber", "Spinach", "Mushrooms", "Chicken", "Rice", "Beans", "Cheese"].map((ingredient, index) => (
            <span key={index} className="ingredient">
              {/* Bullet */}
              <span className="bullet">⚫</span><span className="ingredient-text">{ingredient}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;