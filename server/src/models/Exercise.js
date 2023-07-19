const dbConnection = require('../db/connection');

class Exercise {
  constructor(subject, question, correctAnswer) {
    this.subject = subject;
    this.question = question;
    this.correctAnswer = correctAnswer;
  }

  static getAll(callback) {
    const query = 'SELECT * FROM exercises';
    dbConnection.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  create(callback) {
    const query = 'INSERT INTO exercises (subject, question, correct_answer) VALUES (?, ?, ?)';
    dbConnection.query(query, [this.subject, this.question, this.correctAnswer], (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  }
}

module.exports = Exercise;
