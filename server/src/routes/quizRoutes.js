const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

// Rota para criar um novo quiz
router.post('/', quizController.createQuiz);

module.exports = router;
