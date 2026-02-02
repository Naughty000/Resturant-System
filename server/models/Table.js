const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true, unique: true },
  capacity: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  location: String, // 'indoor', 'outdoor', 'vip'
  reservations: [
    {
      customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      reservationTime: Date,
      duration: Number, // in hours
      guests: Number,
      status: {
        type: String,
        enum: ["booked", "seated", "completed", "cancelled"],
        default: "booked",
      },
    },
  ],
});

module.exports = mongoose.model("Table", tableSchema);
