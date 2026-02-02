import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Reservation from "./pages/Reservation"; // NEW
import About from "./pages/About"; // NEW
import Contact from "./pages/Contact"; // NEW
import Cart from "./pages/Cart"; // NEW
import Navbar from "./components/Navbar";

// Modern Restaurant Theme - Green/Teal Fresh Colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#0A2342", // Dark Navy Blue
      light: "#1C3D5A",
      dark: "#061A2E",
    },
    secondary: {
      main: "#8B7355", // Warm Brown
      light: "#A89070",
      dark: "#6B583F",
    },
    accent: {
      main: "#D4AF37", // Gold accent
      light: "#E6C76E",
      dark: "#B38F2B",
    },
    background: {
      default: "#F5F1E8", // Light creamy beige
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#4A4A4A",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", serif',
    h1: {
      fontWeight: 700,
      color: "#0A2342",
    },
    h2: {
      fontWeight: 600,
      color: "#0A2342",
    },
    h3: {
      fontWeight: 600,
      color: "#8B7355",
    },
    h4: {
      fontWeight: 500,
      color: "#8B7355",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      fontFamily: '"Roboto", sans-serif',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
        },
        contained: {
          background: "linear-gradient(45deg, #0A2342 30%, #1C3D5A 90%)",
          color: "white",
          "&:hover": {
            background: "linear-gradient(45deg, #061A2E 30%, #0A2342 90%)",
          },
        },
        outlined: {
          borderColor: "#8B7355",
          color: "#8B7355",
          "&:hover": {
            borderColor: "#6B583F",
            backgroundColor: "rgba(139, 115, 85, 0.04)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(10, 35, 66, 0.1)",
          border: "1px solid #E8E2D6",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(10, 35, 66, 0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#0A2342",
          boxShadow: "0 2px 10px rgba(10, 35, 66, 0.2)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
