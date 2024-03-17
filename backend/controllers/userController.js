// Import required packages and models
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 
const validator = require('validator'); // Used for email and password validation
const jwt = require('jsonwebtoken'); // Used for generating JWT tokens for authentication

// Async function to handle user registration
exports.register = async (req, res) => {
  // Destructure username, email, and password from request body
  const { username, email, password } = req.body;

  try {
    // Validate email format using validator package
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: 'Invalid email format' });
    }

    // Validate password length (minimum 6 characters)
    if (!validator.isLength(password, { min: 6 })) {
      return res.status(400).json({ msg: 'Password must be at least 6 characters long' });
    }

    // Check if a user with the given email already exists in the database
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user instance with the provided details
    user = new User({
      username,
      email,
      password 
    });

    // Generate a salt and hash the password before storing it
    const salt = await bcrypt.genSalt(10); // Salt rounds
    user.password = await bcrypt.hash(password, salt); // Hashed password

    // Save the new user to the database
    await user.save();

    // Prepare payload for JWT token
    const payload = {
      user: {
        id: user.id // User's unique ID from the database
      }
    };

    // Generate a JWT token with the payload, secret key, and set expiration
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) throw err;
      res.status(201).json({ token }); // Send the JWT token to the user
    });

  } catch (err) {
    // Log and return any server errors
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Async function to fetch all users from the database
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users without filters
    res.json(users); // Send back the user data as JSON
  } catch (err) {
    // Log and return any errors encountered
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Async function to get the logged-in user's profile
exports.getUserProfile = async (req, res) => {
  try {
    // Assume req.user.id is set from a JWT authentication middleware
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from the result
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


// Async function to fetch a single user by their email
exports.getUserByEmail = async (req, res) => {
  try {
    // Extract email from request parameters
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).send('User not found'); // User not found in the database
    }
    res.json(user); // Send back the found user data as JSON
  } catch (err) {
    // Log and return any errors encountered
    console.error(err);
    res.status(500).send('Server error');
  }
};
// Async function to handle user login
exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if a user with the given email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      // Prepare payload for JWT token
      const payload = {
        user: {
          id: user.id // User's unique ID from the database
        }
      };
  
      // Generate a JWT token with the payload, secret key, and set expiration
      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
        if (err) throw err;
        res.json({ token }); // Send the JWT token to the user
      });
  
    } catch (err) {
      // Log and return any server errors
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  