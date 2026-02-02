const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["appetizer", "main course", "dessert", "beverage", "special"],
    required: true,
  },
  image: String,
  ingredients: [String],
  isAvailable: { type: Boolean, default: true },
  preparationTime: Number, // in minutes
  discount: { type: Number, default: 0 },
  tags: [String],
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
