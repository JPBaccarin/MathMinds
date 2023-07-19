const dbConnection = require('../db/connection');

class Score {
  constructor(userId, exerciseId, score) {
    this.userId = userId;
    this.exerciseId = exerciseId;
    this.score = score;
  }

  static getAll(callback) {
    const query = 'SELECT * FROM scores';
    dbConnection.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  create(callback) {
    const query = 'INSERT INTO scores (user_id, exercise_id, score) VALUES (?, ?, ?)';
    dbConnection.query(query, [this.userId, this.exerciseId, this.score], (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  }
}

module.exports = Score;
