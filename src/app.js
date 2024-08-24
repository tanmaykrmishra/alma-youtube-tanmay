const express = require("express");
const router = express.Router();
const Subscriber = require("./models/subscribers");

// Get all subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get subscriber names
router.get("/names", async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, "name subscribedChannel");
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get subscriber by ID
router.get("/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (!subscriber)
      return res.status(400).json({ message: "Subscriber not found" });
    res.json(subscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
