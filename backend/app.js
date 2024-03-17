// Load environment variables
require('dotenv').config();

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express app
const app = express();

// Enable CORS and JSON parsing middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoDB_URI = process.env.MONGODB_URI;
mongoose.connect(mongoDB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

// Import routes
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
