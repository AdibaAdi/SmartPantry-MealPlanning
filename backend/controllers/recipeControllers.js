const axios = require('axios');

// Using environment variables for API credentials and URLs
const FOOD_API_URL = 'https://api.edamam.com/api/recipes/v2';
const NUTRITION_API_URL = 'https://api.edamam.com/api/nutrition-details';
const APP_ID = process.env.APP_ID; // Moved to environment variable
const APP_KEY = process.env.APP_KEY; // Moved to environment variable

// Search for recipes
exports.searchRecipes = async (req, res) => {
    const { query } = req.params;
    try {
        const { data } = await axios.get(`${FOOD_API_URL}`, {
            params: {
                type: 'public',
                q: query,
                app_id: APP_ID,
                app_key: APP_KEY
            }
        });
        res.status(200).json(data.hits);
    } catch (error) {
        console.error('Error searching for recipes:', error);
        res.status(500).json({ message: 'Error searching for recipes' });
    }
};

// Get recipe nutrition data
exports.getNutritionData = async (req, res) => {
    const { ingredients } = req.body;
    try {
        const { data } = await axios.post(`${NUTRITION_API_URL}`, {
            ingredients: ingredients
        }, {
            headers: {
                'Content-Type': 'application/json',
                'app_id': APP_ID, // Corrected to use the consistent APP_ID
                'app_key': APP_KEY // Corrected to use the consistent APP_KEY
            }
        });
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
        res.status(500).json({ message: 'Error fetching nutrition data' });
    }
};

// Additional controller functions as needed for creating recipes, managing meal plans, etc. can be added here later if we have time.
