const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const port = 8080;

// Use CORS middleware to allow frontend requests
app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests from the frontend (adjust URL if necessary)
  methods: ['GET', 'POST'],        // Allow specific methods
  allowedHeaders: ['Content-Type'], // Allow specific headers
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define your login route
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  // Dummy login logic (you can replace this with actual authentication logic)
  if (username === 'user' && password === 'password') {
    res.json({ token: 'fake-jwt-token', username });
  } else {
    res.status(401).json({ errorMessage: 'Invalid username or password' });
  }
});

// Define your signup route
app.post('/api/auth/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Dummy signup logic (you can replace this with actual user creation logic)
  res.json({ message: 'Signup successful' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
