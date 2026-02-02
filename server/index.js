const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const demoRoutes = require("./routes/demoRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/demo-data", demoRoutes);

// MongoDB Connection
// MongoDB Connection with demo fallback
if (process.env.NODE_ENV === "demo") {
  console.log("🔧 Running in DEMO MODE - Using mock data");
  console.log("✅ Server running without database connection");
  console.log("📊 API endpoints available:");
  console.log("   GET  /api/demo");
  console.log("   GET  /api/health");
  console.log("   GET  /api/demo-data/*");
  console.log("   POST /api/auth/demo-login");
} else {
  console.log("Attempting to connect to MongoDB...");
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ MongoDB Connected Successfully!");
    })
    .catch((err) => {
      console.error("❌ MongoDB Connection Error:", err.message);
      console.log("💡 Running in demo mode without database");
    });
}

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Restaurant API Running" });
});

app.get("/api/demo", (req, res) => {
  res.json({
    project: "Restaurant Management System",
    status: "API Running Successfully",
    features: [
      "User Authentication",
      "Menu Management",
      "Order Processing",
      "Table Reservations",
      "Admin Dashboard",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "React"],
    note: "Portfolio Project - All data is mock/sample",
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
