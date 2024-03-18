const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeControllers');

// Route to search for recipes by query
router.get('/search/:query', recipeController.searchRecipes);

// Route to get nutrition data for a recipe
router.post('/nutrition', recipeController.getNutritionData);

router.get('/all', recipeController.getAllRecipes);

router.get('/getMyRecipes', recipeController.getUserRecipes);

module.exports = router;
