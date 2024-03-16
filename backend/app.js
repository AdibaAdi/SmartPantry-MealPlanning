require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

const app = express();

// Middleware
app.use(bodyParser.json());

//MongoDB Connection
const mongoDB_URI = process.env.MONGODB_URI || 'mongodb+srv://AdibaAdi:oH2FTmyO4biwaImK@smartpantry.4bt73na.mongodb.net/';

mongoose.connect(mongoDB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//routes for user and recipes
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);

