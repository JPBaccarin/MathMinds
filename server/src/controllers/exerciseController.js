const Exercise = require('../models/Exercise');

// Get all exercises
exports.getAllExercises = (req, res, next) => {
  Exercise.getAll((err, exercises) => {
    if (err) {
      console.error('Error fetching exercises:', err);
      return next(err);
    }
    res.json(exercises);
  });
};

// Create a new exercise
exports.createExercise = (req, res, next) => {
  const { subject, question, correctAnswer } = req.body;
  const exercise = new Exercise(subject, question, correctAnswer);
  exercise.create((err) => {
    if (err) {
      console.error('Error creating exercise:', err);
      return next(err);
    }
    res.status(201).json({ message: 'Exercise created successfully' });
  });
};
