import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";

const Home = () => {
  const features = [
    {
      icon: <RestaurantIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
      title: "Online Ordering",
      description: "Seamless digital menu with real-time ordering",
    },
    {
      icon: <DeliveryDiningIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Delivery Management",
      description: "Track and manage deliveries efficiently",
    },
    {
      icon: <TableRestaurantIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
      title: "Table Reservations",
      description: "Advanced booking system with floor plan",
    },
    {
      icon: <DashboardIcon sx={{ fontSize: 40, color: "#7b1fa2" }} />,
      title: "Analytics Dashboard",
      description: "Real-time insights and reporting",
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Restaurant Owner",
      text: "Increased our efficiency by 40%",
    },
    {
      name: "Maria Garcia",
      role: "Operations Manager",
      text: "Customer satisfaction improved dramatically",
    },
    {
      name: "David Chen",
      role: "Head Chef",
      text: "Streamlined our kitchen operations perfectly",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "white",
          py: { xs: 8, md: 12 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Chip
            label="Premium Solution"
            color="secondary"
            sx={{ mb: 3, fontWeight: "bold" }}
          />

          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "white", // ← CHANGE THIS
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            Gourmet Restaurant Management
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: 800,
              mx: "auto",
            }}
          >
            Comprehensive platform for modern restaurant operations, from order
            management to business analytics.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/menu"
              sx={{
                minWidth: 200,
                height: 56,
                fontSize: "1.1rem",
              }}
            >
              Start Ordering
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/login"
              sx={{
                minWidth: 200,
                height: 56,
                fontSize: "1.1rem",
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "grey.300",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Management Portal
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ bgcolor: "grey.100", py: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} md={3} sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                500+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Restaurants Served
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                98%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Customer Satisfaction
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                24/7
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Support Available
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                40%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Efficiency Boost
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Core Features
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: 700, mx: "auto" }}
        >
          Everything you need to run a successful restaurant in one integrated
          platform
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 32px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "primary.light",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box sx={{ bgcolor: "grey.50", py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Trusted by Industry Leaders
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            See what our clients say about our platform
          </Typography>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{ p: 4, height: "100%", bgcolor: "white" }}
                >
                  <Box sx={{ display: "flex", mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{ color: "#ffb400", fontSize: 20 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", mb: 3 }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 10, textAlign: "center" }}>
        <Paper elevation={3} sx={{ p: 6, borderRadius: 2 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            Ready to Transform Your Restaurant?
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Join thousands of restaurants already using our platform to
            streamline their operations
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/login"
              sx={{
                minWidth: 200,
                height: 56,
                fontSize: "1.1rem",
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/menu"
              sx={{
                minWidth: 200,
                height: 56,
                fontSize: "1.1rem",
              }}
            >
              View Demo
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "primary.dark", color: "white", py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Gourmet Restaurant System
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Professional restaurant management solution for modern
                businesses.
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle1" gutterBottom>
                Product
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Features
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Pricing
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle1" gutterBottom>
                Company
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                About
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Contact
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" gutterBottom>
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                <AccessTimeIcon
                  sx={{ fontSize: 14, mr: 1, verticalAlign: "middle" }}
                />
                Support: 24/7
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                📞 +1 (555) 123-4567
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
