const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/signup', userController.createUser);

// Rota para autenticar o login do usuário
router.post('/login', userController.authenticateUser);

module.exports = router;
