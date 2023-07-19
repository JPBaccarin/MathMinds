const Score = require('../models/Score');

// Get all scores
exports.getAllScores = (req, res, next) => {
  Score.getAll((err, scores) => {
    if (err) {
      console.error('Error fetching scores:', err);
      return next(err);
    }
    res.json(scores);
  });
};

// Create a new score
exports.createScore = (req, res, next) => {
  const { userId, exerciseId, score } = req.body;
  const scoreObj = new Score(userId, exerciseId, score);
  scoreObj.create((err) => {
    if (err) {
      console.error('Error creating score:', err);
      return next(err);
    }
    res.status(201).json({ message: 'Score created successfully' });
  });
};
