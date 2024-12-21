// Import required libraries
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { resolve } = require('path');

// Initialize dotenv to load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Load the port from the environment variable (defaults to 3010)
const PORT = process.env.PORT || 3010;

// Connect to MongoDB using the Mongoose library
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Serve static files from the 'static' folder
app.use(express.static('static'));

// Route to serve the index.html page
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Basic route to test server functionality
app.get('/test', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
