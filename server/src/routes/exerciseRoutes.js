const express = require('express');
const exerciseController = require('../controllers/exerciseController');

const router = express.Router();

// Rota para obter todos os exercícios
router.get('/', exerciseController.getAllExercises);

// Rota para criar um novo exercício
router.post('/', exerciseController.createExercise);

module.exports = router;
