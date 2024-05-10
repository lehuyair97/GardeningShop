const mongoose = require("mongoose");
const gardeningItemSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  origin: {
    type: String,
    required: true
  }
});

const Gardening = mongoose.model("Gardening", gardeningItemSchema);
module.exports = Gardening;
