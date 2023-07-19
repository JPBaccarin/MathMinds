const db = require('../db/connection');

// Função para criar um novo usuário
exports.createUser = (req, res) => {
  const { name, email, password, birthdate } = req.body;
  const query = `INSERT INTO users (name, email, password, birthdate) VALUES (?, ?, ?, ?)`;
  db.query(query, [name, email, password, birthdate], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Erro ao criar usuário', error });
    } else {
      res.status(201).json({ message: 'Usuário criado com sucesso' });
    }
  });
};

// Função para autenticar o login do usuário
exports.authenticateUser = (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.query(query, [email, password], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Erro ao autenticar usuário', error });
    } else if (results.length === 0) {
      res.status(401).json({ message: 'Credenciais inválidas' });
    } else {
      res.status(200).json({ message: 'Login bem-sucedido', user: results[0] });
    }
  });
};
