const axios = require('axios');
const Recipe = require('../models/Recipe'); 

// Environment variables for API credentials and URLs
const FOOD_API_URL = 'https://api.edamam.com/api/recipes/v2';
const NUTRITION_API_URL = 'https://api.edamam.com/api/nutrition-details';
// Use the specific APP_ID and APP_KEY for each API
const FOOD_APP_ID = process.env.FOOD_APP_ID;
const FOOD_APP_KEY = process.env.FOOD_APP_KEY;
const NUTRITION_APP_ID = process.env.NUTRITION_APP_ID;
const NUTRITION_APP_KEY = process.env.NUTRITION_APP_KEY;

// Search for recipes
exports.searchRecipes = async (req, res) => {
    const { query } = req.params;
    try {
        const response = await axios.get(`${FOOD_API_URL}`, {
            params: {
                type: 'public',
                q: query,
                app_id: FOOD_APP_ID,
                app_key: FOOD_APP_KEY
            }
        });
        res.status(200).json(response.data.hits);
    } catch (error) {
        console.error('Error searching for recipes:', error);
        res.status(500).json({ message: 'Error searching for recipes' });
    }
};

// Get recipe nutrition data
exports.getNutritionData = async (req, res) => {
    const { ingredients } = req.body;
    try {
        const response = await axios.post(`${NUTRITION_API_URL}`, {
            ingredients: ingredients
        }, {
            headers: {
                'Content-Type': 'application/json',
                'app_id': NUTRITION_APP_ID,
                'app_key': NUTRITION_APP_KEY
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
        res.status(500).json({ message: 'Error fetching nutrition data' });
    }
};

// Async function to fetch all recipes from the database
exports.getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find(); // Fetch all users without filters
      res.json(recipes); // Send back the user data as JSON
    } catch (err) {
      // Log and return any errors encountered
      console.error(err);
      res.status(500).send('Server error');
    }
  };

  // Async function to fetch all recipes from the database
  exports.getUserRecipes = async (req, res) => {
    try {
      // Extract email from request parameters
      const recipe = await Recipe.find({ user_name: req.body.user_name });
      if (!recipe) {
        return res.status(404).send('recipe not found'); // User not found in the database
      }
      res.json(recipe); // Send back the found user data as JSON
    } catch (err) {
      // Log and return any errors encountered
      console.error(err);
      res.status(500).send('Server error');
    }
  };

  exports.addRecipe = async(req,res) => {
    try{
      console.log('adding recipe');
      const{ _id, recipe_name, description, ingredients, time, steps, user_name } = req.body;
      const recipe = new Recipe({
        _id,
        recipe_name,
        description,
        ingredients,
        time,
        steps,
        user_name
      });
      
      await recipe.save()
      res.status(201).json('OK');

    } catch (err) {
      // Log and return any errors encountered
      console.error(err);
      res.status(500).send('Server error');
    }
  }