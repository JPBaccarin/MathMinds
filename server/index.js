const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Rotas para usuários
app.use('/users', userRoutes);

// Rotas para quizzes
app.use('/quizzes', quizRoutes);

// Rotas para exercícios
app.use('/exercises', exerciseRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
