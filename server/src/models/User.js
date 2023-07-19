const dbConnection = require('../db/connection');

class User {
  constructor(name, email, password, birthdate) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthdate = birthdate;
  }

  static getAll(callback) {
    const query = 'SELECT * FROM users';
    dbConnection.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  create(callback) {
    const query = 'INSERT INTO users (name, email, password, birthdate) VALUES (?, ?, ?, ?)';
    dbConnection.query(query, [this.name, this.email, this.password, this.birthdate], (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  }
}

module.exports = User;
