const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');
const errorHandler = require('./middleware/errorHandler');


// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// API routes
app.use('/api/quizzes', quizRoutes);

// Error Handler Middleware (must be after the routes)
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send(`
      Welcome to the Quiz-Application!
  `);
});

// Start server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
