require("dotenv").config(); // Load environment variables from .env file
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Get the port number from environment variables or default to 3000
const port = process.env.PORT || 3000;

// MongoDB connection string from environment variables
const mongoURI = process.env.MONGO_URI;

// Import routes
const subscriberRoutes = require("./app");

// Middleware
app.use(express.json());
app.use("/subscribers", subscriberRoutes);

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
