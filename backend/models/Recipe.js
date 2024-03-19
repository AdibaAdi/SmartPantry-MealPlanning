const mongoose = require('mongoose');
const validator = require('validator');

const RecipeSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  recipe_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  time: {
    type: Number,
  },
  steps: [{
    type: String,
  }],

});

module.exports = mongoose.model('Recipe', RecipeSchema);
