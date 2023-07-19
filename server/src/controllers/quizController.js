const db = require('../db/connection');

// Função para criar um novo quiz
exports.createQuiz = (req, res) => {
  const { title, description, questions } = req.body;
  const quizQuery = `INSERT INTO quizzes (title, description) VALUES (?, ?)`;
  const questionQuery = `INSERT INTO quiz_questions (quiz_id, question) VALUES (?, ?)`;

  db.getConnection((error, connection) => {
    if (error) {
      res.status(500).json({ message: 'Erro de conexão com o banco de dados', error });
    } else {
      connection.beginTransaction((error) => {
        if (error) {
          res.status(500).json({ message: 'Erro ao iniciar transação', error });
        } else {
          connection.query(quizQuery, [title, description], (error, quizResult) => {
            if (error) {
              connection.rollback(() => {
                res.status(500).json({ message: 'Erro ao criar quiz', error });
              });
            } else {
              const quizId = quizResult.insertId;
              const questionValues = questions.map((question) => [quizId, question]);
              connection.query(questionQuery, questionValues, (error) => {
                if (error) {
                  connection.rollback(() => {
                    res.status(500).json({ message: 'Erro ao criar perguntas do quiz', error });
                  });
                } else {
                  connection.commit((error) => {
                    if (error) {
                      connection.rollback(() => {
                        res.status(500).json({ message: 'Erro ao confirmar transação', error });
                      });
                    } else {
                      res.status(201).json({ message: 'Quiz criado com sucesso' });
                    }
                  });
                }
              });
            }
          });
        }
      });
      connection.release();
    }
  });
};
