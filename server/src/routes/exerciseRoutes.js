const express = require('express');
const exerciseController = require('../controllers/exerciseController');

const router = express.Router();

// Get all exercises
router.get('/', exerciseController.getAllExercises);

// Create a new exercise
router.post('/', exerciseController.createExercise);

module.exports = router;
