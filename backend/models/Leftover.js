const mongoose = require('mongoose');

const LeftoverSchema = new mongoose.Schema({
    leftover_name: {
        type: String,
        required: true,
      },
      date_stored: {
        type: Date,
        default: Date.now,
        required: true
      },
      completion_status: {
        type: Boolean,
        default: false,
        required: true
      },
      user_name: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model('Leftover', LeftoverSchema);