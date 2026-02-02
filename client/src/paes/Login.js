import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Add this container style at the beginning of Login component
<Container
  maxWidth="sm"
  sx={{
    py: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
  }}
></Container>;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Demo login - for portfolio
    if (email === "admin@restaurant.com" && password === "demo123") {
      // Save user to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Admin User",
          email: email,
          role: "admin",
        }),
      );

      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      setError("Use: admin@restaurant.com / demo123");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          🔐 Login
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          gutterBottom
        >
          Portfolio Demo - Use: admin@restaurant.com / demo123
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </form>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            💡 This is a demo login for portfolio showcase.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
