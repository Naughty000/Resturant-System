import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Badge,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const navigate = useNavigate();

  // Get cart count
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartCount = cart.length;

  return (
    <AppBar position="sticky" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
            <RestaurantIcon sx={{ mr: 1, fontSize: 32, color: "#ff9800" }} />
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                color: "white",
                textDecoration: "none",
                "&:hover": { opacity: 0.9 },
              }}
            >
              Gourmet
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}
          >
            <Button component={Link} to="/menu" sx={{ color: "white" }}>
              Menu
            </Button>
            <Button component={Link} to="/reservations" sx={{ color: "white" }}>
              Reservations
            </Button>
            <Button component={Link} to="/about" sx={{ color: "white" }}>
              About
            </Button>
            <Button component={Link} to="/contact" sx={{ color: "white" }}>
              Contact
            </Button>
          </Box>

          {/* Right Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Cart */}
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {/* Auth Buttons */}
            <Button
              variant="outlined"
              component={Link}
              to="/login"
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": { borderColor: "#ff9800", color: "#ff9800" },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              sx={{
                background: "#8B7355",
                "&:hover": { background: "#6B583F" },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
