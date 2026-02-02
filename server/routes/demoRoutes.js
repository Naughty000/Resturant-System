const express = require("express");
const router = express.Router();

// Mock data for portfolio demo
const mockData = {
  stats: {
    totalOrders: 124,
    totalRevenue: 8925.5,
    activeCustomers: 89,
    pendingOrders: 12,
  },
  recentOrders: [
    { id: "ORD-1001", customer: "John Doe", amount: 45.5, status: "delivered" },
    {
      id: "ORD-1002",
      customer: "Jane Smith",
      amount: 32.75,
      status: "preparing",
    },
    { id: "ORD-1003", customer: "Bob Johnson", amount: 67.25, status: "ready" },
  ],
  menu: [
    { id: 1, name: "Margherita Pizza", price: 12.99, category: "main" },
    { id: 2, name: "Caesar Salad", price: 8.99, category: "appetizer" },
    { id: 3, name: "Chocolate Cake", price: 6.99, category: "dessert" },
  ],
};

// Get dashboard stats
router.get("/dashboard", (req, res) => {
  res.json(mockData.stats);
});

// Get recent orders
router.get("/orders", (req, res) => {
  res.json(mockData.recentOrders);
});

// Get menu items
router.get("/menu", (req, res) => {
  res.json(mockData.menu);
});

// Simulate order placement
router.post("/orders", (req, res) => {
  const newOrder = {
    id: `ORD-${Date.now()}`,
    ...req.body,
    status: "confirmed",
    timestamp: new Date().toISOString(),
  };

  // Add to mock data (just for current session)
  mockData.recentOrders.unshift(newOrder);
  mockData.stats.totalOrders += 1;
  mockData.stats.totalRevenue += newOrder.amount;

  res.json({
    success: true,
    message: "Order placed successfully (Demo)",
    order: newOrder,
  });
});

module.exports = router;
