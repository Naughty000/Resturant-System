const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  specialInstructions: String,
});

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [orderItemSchema],
  totalAmount: { type: Number, required: true },
  orderType: {
    type: String,
    enum: ["dine-in", "takeaway", "delivery"],
    required: true,
  },
  status: {
    type: String,
    enum: [
      "pending",
      "confirmed",
      "preparing",
      "ready",
      "delivered",
      "cancelled",
    ],
    default: "pending",
  },
  tableNumber: Number, // for dine-in
  deliveryAddress: String, // for delivery
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed", "refunded"],
    default: "pending",
  },
  paymentMethod: String,
  orderNotes: String,
  estimatedTime: Number, // in minutes
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
