const mongoose = require("mongoose");
const Subscriber = require("./models/subscribers");
require("dotenv").config(); // Load environment variables from .env file

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Clear existing data
    await Subscriber.deleteMany({});

    // Insert sample data
    const subscribers = [
      { name: "Alice Johnson", subscribedChannel: "Tech Talk" },
      { name: "Bob Smith", subscribedChannel: "Cooking Channel" },
      { name: "Charlie Brown", subscribedChannel: "Travel Diaries" },
      { name: "Diana Prince", subscribedChannel: "Fitness Guru" },
      { name: "Edward Norton", subscribedChannel: "Movie Reviews" },
      { name: "Fiona Green", subscribedChannel: "Gardening Tips" },
      { name: "George Clooney", subscribedChannel: "Music Mania" },
      { name: "Hannah Lee", subscribedChannel: "Tech Talk" },
      { name: "Ian McKellen", subscribedChannel: "Cooking Channel" },
      { name: "Jessica Alba", subscribedChannel: "Travel Diaries" },
      { name: "Kevin Hart", subscribedChannel: "Fitness Guru" },
      { name: "Lily Collins", subscribedChannel: "Movie Reviews" },
      { name: "Matt Damon", subscribedChannel: "Gardening Tips" },
      { name: "Natalie Portman", subscribedChannel: "Music Mania" },
      { name: "Oscar Isaac", subscribedChannel: "Tech Talk" },
      { name: "Penelope Cruz", subscribedChannel: "Cooking Channel" },
      { name: "Quentin Tarantino", subscribedChannel: "Travel Diaries" },
      { name: "Rachel McAdams", subscribedChannel: "Fitness Guru" },
      { name: "Samuel L. Jackson", subscribedChannel: "Movie Reviews" },
      { name: "Tina Fey", subscribedChannel: "Gardening Tips" },
      { name: "Uma Thurman", subscribedChannel: "Music Mania" },
    ];

    await Subscriber.insertMany(subscribers);
    console.log("Sample data inserted");

    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
