import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Stack,
  Avatar,
  LinearProgress,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  Restaurant,
  People,
  AttachMoney,
  Schedule,
  Assessment,
  Inventory,
  LocalShipping,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [recentOrders, setRecentOrders] = useState([]);
  const [performance, setPerformance] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Professional mock data
    setStats({
      totalRevenue: { value: 89250, change: 12.5, trend: "up" },
      totalOrders: { value: 1247, change: 8.2, trend: "up" },
      avgOrderValue: { value: 71.6, change: 4.3, trend: "up" },
      customerSatisfaction: { value: 4.8, change: 0.2, trend: "up" },
      tableOccupancy: { value: 78, change: -2.1, trend: "down" },
      pendingOrders: { value: 12, change: -15, trend: "down" },
    });

    setRecentOrders([
      {
        id: "ORD-2301-001",
        customer: "Corporate Event",
        amount: 1250.5,
        status: "completed",
        time: "10:30 AM",
        type: "catering",
      },
      {
        id: "ORD-2301-002",
        customer: "John Smith",
        amount: 89.99,
        status: "preparing",
        time: "11:15 AM",
        type: "delivery",
      },
      {
        id: "ORD-2301-003",
        customer: "Reservation #45",
        amount: 320.75,
        status: "served",
        time: "12:45 PM",
        type: "dine-in",
      },
      {
        id: "ORD-2301-004",
        customer: "Maria Garcia",
        amount: 45.3,
        status: "pending",
        time: "1:30 PM",
        type: "pickup",
      },
      {
        id: "ORD-2301-005",
        customer: "Tech Company",
        amount: 560.8,
        status: "confirmed",
        time: "2:15 PM",
        type: "catering",
      },
    ]);

    setPerformance({
      revenueTarget: 85,
      ordersTarget: 92,
      satisfactionTarget: 95,
      occupancyTarget: 80,
    });
  }, []);

  const StatCard = ({
    title,
    value,
    icon,
    change,
    trend,
    prefix = "",
    suffix = "",
  }) => (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textTransform: "uppercase", letterSpacing: 0.5 }}
            >
              {title}
            </Typography>
            <Typography variant="h4" sx={{ mt: 1, fontWeight: "bold" }}>
              {prefix}
              {typeof value === "number" ? value.toLocaleString() : value}
              {suffix}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              {trend === "up" ? (
                <TrendingUp sx={{ color: "#4caf50", mr: 0.5, fontSize: 16 }} />
              ) : (
                <TrendingDown
                  sx={{ color: "#f44336", mr: 0.5, fontSize: 16 }}
                />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: trend === "up" ? "#4caf50" : "#f44336",
                  fontWeight: "medium",
                }}
              >
                {change > 0 ? "+" : ""}
                {change}%
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ ml: 1 }}
              >
                vs last month
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "primary.light",
              color: "primary.main",
              borderRadius: 2,
              p: 1.5,
              display: "flex",
            }}
          >
            {icon}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );

  const PerformanceCard = ({ title, value, target }) => (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body2">{title}</Typography>
        <Typography variant="body2" fontWeight="bold">
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 4,
          bgcolor: "grey.200",
          "& .MuiLinearProgress-bar": {
            borderRadius: 4,
            bgcolor: value >= target ? "#4caf50" : "#2196f3",
          },
        }}
      />
      <Typography variant="caption" color="text.secondary">
        Target: {target}%
      </Typography>
    </Box>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 6 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Restaurant Dashboard
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Welcome back, Admin. Here's what's happening today.
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Assessment />}
            onClick={() => navigate("/reports")}
          >
            View Full Report
          </Button>
        </Stack>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StatCard
            title="Total Revenue"
            value={stats.totalRevenue?.value}
            prefix="$"
            change={stats.totalRevenue?.change}
            trend={stats.totalRevenue?.trend}
            icon={<AttachMoney />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StatCard
            title="Total Orders"
            value={stats.totalOrders?.value}
            change={stats.totalOrders?.change}
            trend={stats.totalOrders?.trend}
            icon={<Restaurant />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StatCard
            title="Avg Order Value"
            value={stats.avgOrderValue?.value}
            prefix="$"
            change={stats.avgOrderValue?.change}
            trend={stats.avgOrderValue?.trend}
            icon={<AttachMoney />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StatCard
            title="Satisfaction"
            value={stats.customerSatisfaction?.value}
            suffix="/5"
            change={stats.customerSatisfaction?.change}
            trend={stats.customerSatisfaction?.trend}
            icon={<People />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StatCard
            title="Table Occupancy"
            value={stats.tableOccupancy?.value}
            suffix="%"
            change={stats.tableOccupancy?.change}
            trend={stats.tableOccupancy?.trend}
            icon={<Schedule />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StatCard
            title="Pending Orders"
            value={stats.pendingOrders?.value}
            change={stats.pendingOrders?.change}
            trend={stats.pendingOrders?.trend}
            icon={<LocalShipping />}
          />
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Performance Metrics */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, height: "100%" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Performance Metrics
            </Typography>
            <PerformanceCard
              title="Revenue Target"
              value={performance.revenueTarget}
              target={85}
            />
            <PerformanceCard
              title="Order Completion"
              value={performance.ordersTarget}
              target={90}
            />
            <PerformanceCard
              title="Customer Satisfaction"
              value={performance.satisfactionTarget}
              target={95}
            />
            <PerformanceCard
              title="Table Occupancy"
              value={performance.occupancyTarget}
              target={85}
            />
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: "100%" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Actions
            </Typography>
            <Stack spacing={2} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<Restaurant />}
                onClick={() => navigate("/menu")}
              >
                Manage Menu
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Inventory />}
                onClick={() => navigate("/inventory")}
              >
                View Inventory
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<People />}
                onClick={() => navigate("/customers")}
              >
                Customer Management
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Assessment />}
                onClick={() => navigate("/analytics")}
              >
                View Analytics
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* Recent Orders Table */}
        <Grid item xs={12}>
          <Paper sx={{ p: 0, overflow: "hidden" }}>
            <Box sx={{ p: 3, borderBottom: 1, borderColor: "divider" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Recent Orders
              </Typography>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.50" }}>
                    <TableCell>
                      <strong>Order ID</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Customer</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Type</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Amount</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Status</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Time</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Actions</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id} hover>
                      <TableCell sx={{ fontWeight: "medium" }}>
                        {order.id}
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            sx={{
                              width: 32,
                              height: 32,
                              mr: 2,
                              bgcolor:
                                order.type === "catering"
                                  ? "#7b1fa2"
                                  : order.type === "delivery"
                                    ? "#1976d2"
                                    : "#388e3c",
                            }}
                          >
                            {order.customer.charAt(0)}
                          </Avatar>
                          {order.customer}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={order.type}
                          size="small"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", color: "primary.main" }}
                      >
                        ${order.amount.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={order.status}
                          color={
                            order.status === "completed"
                              ? "success"
                              : order.status === "preparing"
                                ? "warning"
                                : order.status === "served"
                                  ? "info"
                                  : "default"
                          }
                          size="small"
                          sx={{ fontWeight: "medium" }}
                        />
                      </TableCell>
                      <TableCell>{order.time}</TableCell>
                      <TableCell>
                        <Button size="small" variant="text">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
