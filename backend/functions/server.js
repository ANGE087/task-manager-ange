const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/auth', require('../routes/auth'));
app.use('/api/tasks', require('../routes/tasks'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

// Export the serverless function handler
exports.handler = async (event, context) => {
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Server is running' })
  };
};
