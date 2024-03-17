const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user registration
router.post('/register', userController.register);

// Route for user login
router.post('/login', userController.login);

// Route for getting user profile
router.get('/profile', userController.getUserProfile);

// Route to get all users
router.get('/all', userController.getAllUsers);

// Route to get a user by email
router.get('/email/:email', userController.getUserByEmail);

// Export the router at the end of the file
module.exports = router;
