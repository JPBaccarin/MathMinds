const express = require('express');
const cors = require('cors');
const exerciseRoutes = require('./src/routes/exerciseRoutes');
const scoreRoutes = require('./src/routes/scoreRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/exercises', exerciseRoutes);
app.use('/scores', scoreRoutes);
app.use('/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
