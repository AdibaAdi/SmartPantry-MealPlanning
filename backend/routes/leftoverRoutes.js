const express = require('express');
const router = express.Router();
const leftoverController = require('../controllers/leftoverController');

// Get all leftovers
router.get('/all', leftoverController.getAllLeftovers);

// Add a new leftover
router.post('/', leftoverController.addLeftover);

module.exports = router;
