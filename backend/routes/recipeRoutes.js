const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route to search for recipes by query
router.get('/search/:query', recipeController.searchRecipes);

// Route to get nutrition data for a recipe
router.post('/nutrition', recipeController.getNutritionData);

// Might add more routes later as necessary, such as for creating recipes, managing meal plans, etc.

module.exports = router;
