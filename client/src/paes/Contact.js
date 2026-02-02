import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Contact form submitted:", formData);
    setOpenSnackbar(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: "Address",
      details: ["123 Gourmet Street", "Food District", "New York, NY 10001"],
    },
    {
      icon: <PhoneIcon />,
      title: "Phone",
      details: [
        "Reservations: +1 (555) 123-4567",
        "General: +1 (555) 987-6543",
      ],
    },
    {
      icon: <EmailIcon />,
      title: "Email",
      details: ["reservations@gourmet.com", "info@gourmet.com"],
    },
    {
      icon: <AccessTimeIcon />,
      title: "Hours",
      details: [
        "Monday - Sunday: 11:00 AM - 11:00 PM",
        "Weekend Brunch: 10:00 AM - 3:00 PM",
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.dark" }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        gutterBottom
        sx={{ mb: 6 }}
      >
        We'd love to hear from you
      </Typography>

      <Grid container spacing={6}>
        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 4, height: "100%", borderRadius: 3 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Get in Touch
            </Typography>

            {contactInfo.map((info, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Box sx={{ color: "primary.main", mr: 2 }}>{info.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {info.title}
                  </Typography>
                </Box>
                {info.details.map((detail, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 4, mb: 0.5 }}
                  >
                    {detail}
                  </Typography>
                ))}
              </Box>
            ))}

            <Divider sx={{ my: 4 }} />

            {/* Social Media */}
            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                {["📘", "📸", "🐦", "📺"].map((icon, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    sx={{
                      minWidth: "auto",
                      width: 50,
                      height: 50,
                      fontSize: "20px",
                      borderRadius: "50%",
                    }}
                  >
                    {icon}
                  </Button>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 4, borderRadius: 3 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Send a Message
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={6}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ height: 56 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Box sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Find Us Here
        </Typography>
        <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
          <Box
            sx={{
              height: 300,
              bgcolor: "grey.100",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Typography variant="h6" color="text.secondary">
              🗺️ Interactive Map Coming Soon
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Click for directions: 123 Gourmet Street, Food District, NY 10001
          </Typography>
        </Paper>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
