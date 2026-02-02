import React from "react";
import { Container, Typography, Box, Button, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";

const Reservation = () => {
  const navigate = useNavigate();

  const timeSlots = ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];
  const tableTypes = [
    { type: "Window Table", seats: 2, icon: "🪟" },
    { type: "Center Table", seats: 4, icon: "🔲" },
    { type: "Private Booth", seats: 6, icon: "🚪" },
    { type: "Family Table", seats: 8, icon: "👨‍👩‍👧‍👦" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.dark" }}
      >
        🍽️ Book Your Table
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Reserve your dining experience in advance
      </Typography>

      <Grid container spacing={4}>
        {/* Booking Form */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Make a Reservation
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Date
                  </Typography>
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontSize: "16px",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Time
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant="outlined"
                        sx={{ minWidth: "100px" }}
                      >
                        {time}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Guests
                  </Typography>
                  <select
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontSize: "16px",
                      backgroundColor: "white",
                    }}
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Table Type
                  </Typography>
                  <select
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontSize: "16px",
                      backgroundColor: "white",
                    }}
                  >
                    <option>Any Table</option>
                    <option>Window Table</option>
                    <option>Private Booth</option>
                    <option>Family Table</option>
                  </select>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" fullWidth size="large">
                  Confirm Reservation
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Table Info */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: "100%" }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Table Options
            </Typography>

            {tableTypes.map((table, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 3,
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid #e8f5e9",
                  "&:hover": { bgcolor: "#f8fdf8" },
                }}
              >
                <Box sx={{ fontSize: "32px", mr: 2 }}>{table.icon}</Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                    {table.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Seats: {table.seats}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reservation;
