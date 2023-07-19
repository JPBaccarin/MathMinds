const express = require('express');
const scoreController = require('../controllers/scoreController');

const router = express.Router();

// Get all scores
router.get('/', scoreController.getAllScores);

// Create a new score
router.post('/', scoreController.createScore);

module.exports = router;
