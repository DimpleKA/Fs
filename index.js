const express = require('express');
const app = express();

// Load environment variables from a .env file
require('dotenv').config();

// Use the PORT variable from the environment, or default to 3000
const PORT = process.env.PORT || 3000;

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
