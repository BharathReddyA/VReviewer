// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express app
const app = express();

// Enable CORS middleware
app.use(cors());

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/vreviews', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a MongoDB schema for users
const userSchema = new mongoose.Schema({
  name: String,
  nickName: String,
  phoneNumber: String,
  email: String,
  password: String,
});

// Create a MongoDB model for users
const User = mongoose.model('User', userSchema);

// Express middleware to parse JSON requests
app.use(express.json());

// Express route for handling sign-up
app.post('/signup', async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, nickName, phoneNumber, email, password } = req.body;

    // Create a new user instance
    const newUser = new User({ name, nickName, phoneNumber, email, password });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    // Handle errors and respond with an error message
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
