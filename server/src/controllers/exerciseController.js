const db = require('../db/connection');

// Função para obter todos os exercícios
exports.getAllExercises = (req, res) => {
  const query = `SELECT * FROM exercises`;
  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Erro ao obter exercícios', error });
    } else {
      res.status(200).json(results);
    }
  });
};

// Função para criar um novo exercício
exports.createExercise = (req, res) => {
  const { title, description, image, options, correctAnswer } = req.body;
  const query = `INSERT INTO exercises (title, description, image, options, correct_answer) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [title, description, image, options, correctAnswer], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Erro ao criar exercício', error });
    } else {
      res.status(201).json({ message: 'Exercício criado com sucesso' });
    }
  });
};
