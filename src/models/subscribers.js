const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: String,
  subscribedChannel: String,
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
