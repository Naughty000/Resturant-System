import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Grid,
  TextField,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Cart = () => {
  const navigate = useNavigate();

  // Get cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price || 0), 0);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(index);
      return;
    }
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      setCart([]);
      localStorage.removeItem("cart");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/menu")}
          sx={{ mb: 2 }}
        >
          Back to Menu
        </Button>

        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.dark" }}
        >
          🛒 Your Shopping Cart
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {cart.length} items in your cart
        </Typography>
      </Box>

      {cart.length === 0 ? (
        <Paper sx={{ p: 8, textAlign: "center", borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom color="text.secondary">
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Add some delicious items from our menu!
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/menu")}
            startIcon={<ShoppingCartCheckoutIcon />}
          >
            Browse Menu
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
              <Table>
                <TableHead sx={{ bgcolor: "primary.main" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Item
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Price
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Quantity
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Total
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item, index) => {
                    const quantity = item.quantity || 1;
                    const itemTotal = (item.price || 0) * quantity;

                    return (
                      <TableRow key={index} hover>
                        <TableCell>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ fontSize: "32px", mr: 2 }}>
                              {item.image || "🍽️"}
                            </Box>
                            <Box>
                              <Typography
                                variant="body1"
                                sx={{ fontWeight: "medium" }}
                              >
                                {item.name}
                              </Typography>
                              {item.description && (
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {item.description.substring(0, 50)}...
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            ${(item.price || 0).toFixed(2)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <IconButton
                              size="small"
                              onClick={() =>
                                updateQuantity(index, quantity - 1)
                              }
                            >
                              <RemoveIcon />
                            </IconButton>
                            <Typography>{quantity}</Typography>
                            <IconButton
                              size="small"
                              onClick={() =>
                                updateQuantity(index, quantity + 1)
                              }
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", color: "primary.main" }}
                          >
                            ${itemTotal.toFixed(2)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() => removeItem(index)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}
            >
              <Button variant="outlined" onClick={() => navigate("/menu")}>
                Continue Shopping
              </Button>
              <Button color="error" variant="outlined" onClick={clearCart}>
                Clear Cart
              </Button>
            </Box>
          </Grid>

          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, borderRadius: 3, position: "sticky", top: 20 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 3 }}
              >
                Order Summary
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography color="text.secondary">Subtotal</Typography>
                  <Typography>${calculateTotal().toFixed(2)}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography color="text.secondary">Tax (10%)</Typography>
                  <Typography>
                    ${(calculateTotal() * 0.1).toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography color="text.secondary">Delivery</Typography>
                  <Typography>$2.99</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Total
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    ${(calculateTotal() * 1.1 + 2.99).toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              {/* Special Instructions */}
              <TextField
                fullWidth
                label="Special Instructions"
                multiline
                rows={3}
                placeholder="Any allergies, dietary restrictions, or special requests?"
                sx={{ mb: 3 }}
              />

              {/* Checkout Button */}
              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<ShoppingCartCheckoutIcon />}
                onClick={() => navigate("/checkout")}
                sx={{ height: 56, fontWeight: "bold" }}
              >
                Proceed to Checkout
              </Button>

              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 3 }}
              >
                🛡️ Secure payment • 30-minute delivery guarantee
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
