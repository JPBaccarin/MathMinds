const User = require('../models/User');

// Get all users
exports.getAllUsers = (req, res, next) => {
  User.getAll((err, users) => {
    if (err) {
      console.error('Error fetching users:', err);
      return next(err);
    }
    res.json(users);
  });
};

// Create a new user
exports.createUser = (req, res, next) => {
  const { name, email, password, birthdate } = req.body;
  const user = new User(name, email, password, birthdate);
  user.create((err) => {
    if (err) {
      console.error('Error creating user:', err);
      return next(err);
    }
    res.status(201).json({ message: 'User created successfully' });
  });
};
