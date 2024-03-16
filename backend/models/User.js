const mongoose = require('mongoose');


// Define the User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true // Removes whitespace from both ends
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Converts email to lowercase
    match: [/\S+@\S+\.\S+/, 'is invalid'] // Basic regex for email validation
  },
  password: {
    type: String,
    required: true
  },
  // You can add more fields as needed
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Compile and export the model
module.exports = mongoose.model('User', UserSchema);
