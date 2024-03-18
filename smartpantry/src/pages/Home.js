import React, { useState } from 'react'; // Import useState for handling input state
import { Link, useNavigate } from 'react-router-dom'; // Corrected duplicate import
import './homeStyleSheet/home.css'; 
import bluefoodimage from './homeStyleSheet/bluefoodimage.jpg'; 
import './moreInfoStyleSheet/moreinfo.css';



async function grabData(options) {
  const response = await fetch("http://localhost:8000/api/recipes/getMyRecipes", options);
  let user_data = await response.json();

  let arr = [];
  for (let i = 0; i < user_data.length; i++) {
    arr.push({ title: user_data[i].recipe_name, ingredients: user_data[i].ingredients, time: user_data[i].time });
  }
  return arr;
}

function parseData(recipe_data) {
  let arr = [];

  for (let i = 0; i < recipe_data.length; i++) {
    arr.push({ title: recipe_data[i].recipe_name, ingredients: recipe_data[i].ingredients, time: recipe_data[i].time });
  }
  return arr;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [userResults, setUserResults] = useState();
  //const userName = localstorage.getItem("username");
/*
  const recipes = [
    { title: "Pancakes", ingredients: ["Egg", "Flour", "Vanilla extract"], time: "8 minutes" },
    { title: "Grilled Cheese", ingredients: ["Cheese", "Bread", "Butter"], time: "5 minutes" },
    { title: "Smoothie", ingredients: ["Banana", "Milk", "Honey", "Ice"], time: "5 minutes" },
  ];
*/
  // Testing here
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

  fetch("http://localhost:8000/api/recipes/getMyRecipes", requestOptions)
  .then((response) => response.text())
  .then((result) => setUserResults(result))
  .catch((error) => console.error(error));

  let stuff = JSON.parse(userResults);
  //console.log("stuff: " + stuff[0].user_name);
  let recipes = parseData(stuff);
  //console.log("Does it work?");
  console.log(recipes);

/*
  let user_recipe_data = grabData(requestOptions);
  console.log(user_recipe_data);
  let recipes = parseData(user_recipe_data);  
  console.log(recipes);
*/
  // End testing

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value); // Update state with current input
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    navigate(`/searching/${searchQuery}`); // Navigate to the search results page
  };

  return (
    <div className="home">
      <div className="banner">
        <img src={bluefoodimage} alt="" />
        <div className="search-section">
          <form onSubmit={handleSearchSubmit}> {/* Add form element with submit handler */}
            <div className="input-wrapper">
              <input 
                type="text" 
                placeholder="Search recipe by name, ingredients, etc." 
                className="search-input"
                onChange={handleSearchInput} // Add change handler to update state
                value={searchQuery} // Set input value to be controlled by state
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
