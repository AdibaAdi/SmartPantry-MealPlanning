const axios = require('axios');
const Leftover = require('../models/Leftover'); 

// Async function to handle leftover registration
exports.addLeftover = async (req, res) => {
    try {
      
      const { leftover_name, user_name } = req.body;
      const date_stored = new Date(); // Automatically set the date to now
      const newLeftover = new Leftover({
        leftover_name,
        date_stored,
        completion_status: false,
        user_name,
      });
  
      await newLeftover.save();
      res.status(201).json(newLeftover);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

// Async function to fetch all Leftovers from the database
exports.getAllLeftovers = async (req, res) => {
    try {
      const leftovers = await Leftover.find(); // Fetch all leftovers without filters
      res.json(leftovers); // Send back the user data as JSON
    } catch (err) {
      // Log and return any errors encountered
      console.error(err);
      res.status(500).send('Server error');
    }
  };
