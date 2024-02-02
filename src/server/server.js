// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const validator = require("validator");
const bcrypt = require("bcrypt");

// Create Express app
const app = express();

// Enable CORS middleware
app.use(cors());

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB connection string)
mongoose.connect("mongodb://localhost:27017/vreviews", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check MongoDB connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
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
const User = mongoose.model("User", userSchema);

// Express middleware to parse JSON requests
app.use(express.json());

// Express route for handling sign-up
app.post("/signup", async (req, res) => {
  try {
    // Check if the email is already in use
    const existingEmailUser = await User.findOne({ email: req.body.email });
    if (existingEmailUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    // Check if the nickname is already in use
    const existingNicknameUser = await User.findOne({
      nickName: req.body.nickName,
    });
    if (existingNicknameUser) {
      return res.status(400).json({ error: "Nickname is already in use" });
    }

    // Check if the phone number is already in use
    const existingPhoneNumberUser = await User.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    if (existingPhoneNumberUser) {
      return res.status(400).json({ error: "Phone number is already in use" });
    }

    // Validate email format
    if (!validator.isEmail(req.body.email.toLowerCase())) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user instance
    const newUser = new User({
      name: req.body.name,
      nickName: req.body.nickName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Respond with a success message
    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    // Handle errors and respond with an error message
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  console.log("Login request received");

  try {
    const { email, password } = req.body;
    console.log("Email:", email);
    console.log("Password:", password);

    // Check if email is valid
    if (!validator.isEmail(email.toLowerCase())) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Find the user in the database
    const existingUser = await User.findOne({ email });

    // If user not found, return 404
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the provided password matches the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    console.log("Stored Hashed Password:", existingUser.password);
    console.log("Password Match Result:", passwordMatch);

    // If password doesn't match, return 401
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // If everything is okay, send a success response
    res.json({
      message: "Logged in successfully",
      name: existingUser.name,
    });
  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
