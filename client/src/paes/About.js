import React from "react";
import { Container, Typography, Box, Grid, Paper, Avatar } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const About = () => {
  const teamMembers = [
    { name: "Ali Khan", role: "Head Chef", image: "👨‍🍳" },
    { name: "Sarah Ahmed", role: "Manager", image: "👩‍💼" },
    { name: "Mohammed Ali", role: "Sommelier", image: "🍷" },
    { name: "Fatima Hassan", role: "Pastry Chef", image: "🍰" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.dark" }}
        >
          About Gourmet Restaurant
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: "auto" }}
        >
          Where culinary excellence meets unforgettable dining experiences
        </Typography>
      </Box>

      {/* Our Story */}
      <Paper sx={{ p: 6, mb: 8, borderRadius: 4 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main", mb: 4 }}
        >
          Our Story
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          Founded in 2015, Gourmet Restaurant began as a small family-owned
          establishment with a passion for authentic flavors and warm
          hospitality. Over the years, we've grown into a premier dining
          destination, known for our commitment to quality ingredients,
          innovative recipes, and exceptional service.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          Our chefs travel the world to bring you the finest culinary
          techniques, while staying true to traditional recipes that have been
          passed down through generations. Every dish tells a story, and every
          meal is an experience to remember.
        </Typography>
      </Paper>

      {/* Why Choose Us */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Why Choose Us
      </Typography>

      <Grid container spacing={4} sx={{ mb: 10 }}>
        {[
          {
            icon: <RestaurantIcon sx={{ fontSize: 48 }} />,
            title: "Premium Quality",
            desc: "We source only the finest ingredients from trusted suppliers",
          },
          {
            icon: <LocalShippingIcon sx={{ fontSize: 48 }} />,
            title: "Fast Service",
            desc: "Timely delivery and efficient service guaranteed",
          },
          {
            icon: <GroupsIcon sx={{ fontSize: 48 }} />,
            title: "Expert Team",
            desc: "Professional chefs and staff with years of experience",
          },
          {
            icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />,
            title: "Award Winning",
            desc: "Multiple culinary awards and recognition",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                height: "100%",
                borderRadius: 3,
              }}
            >
              <Box sx={{ color: "primary.main", mb: 3 }}>{item.icon}</Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Our Team */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Meet Our Team
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  fontSize: "48px",
                  mx: "auto",
                  mb: 2,
                  bgcolor: "primary.light",
                  color: "primary.main",
                }}
              >
                {member.image}
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                color="primary.main"
                sx={{ fontWeight: "medium" }}
              >
                {member.role}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Contact CTA */}
      <Paper
        sx={{
          p: 6,
          textAlign: "center",
          background: "linear-gradient(45deg, #0A2342 0%, #1C3D5A 100%)", // ← NAVY BLUE GRADIENT
          color: "white",
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(10, 35, 66, 0.2)",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          Visit Us Today
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Experience the difference at Gourmet Restaurant
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <span style={{ color: "#D4AF37" }}>📍</span> 123 Gourmet Street,
            Food District
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <span style={{ color: "#D4AF37" }}>📞</span> +1 (555) 123-4567
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <span style={{ color: "#D4AF37" }}>🕒</span> Open Daily: 11:00 AM -
            11:00 PM
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
