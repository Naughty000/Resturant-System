import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  IconButton,
  Badge,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MosqueIcon from "@mui/icons-material/Mosque";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SpaIcon from "@mui/icons-material/Spa";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [foodType, setFoodType] = useState("all"); // 'halal', 'non-halal', 'all'
  const navigate = useNavigate();

  const categories = [
    { value: "all", label: "All Categories", icon: "🍽️" },
    { value: "biryani", label: "Biryani", icon: "🍚" },
    { value: "curry", label: "Curries", icon: "🥘" },
    { value: "grill", label: "Grill & BBQ", icon: "🔥" },
    { value: "pizza", label: "Pizza", icon: "🍕" },
    { value: "burger", label: "Burgers", icon: "🍔" },
    { value: "pasta", label: "Pasta", icon: "🍝" },
    { value: "appetizer", label: "Starters", icon: "🥗" },
    { value: "dessert", label: "Desserts", icon: "🍰" },
    { value: "beverage", label: "Drinks", icon: "🥤" },
  ];
  const globalMenu = [
    // ================= HALAL SECTION =================
    {
      id: 1,
      name: "Chicken Biryani",
      description:
        "Fragrant basmati rice with tender chicken, aromatic spices, and saffron",
      price: 14.99,
      category: "biryani",
      halal: true,
      popular: true,
      vegetarian: false,
      image:
        "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Halal", "Spicy", "Popular"],
    },
    {
      id: 2,
      name: "Beef Seekh Kebab",
      description:
        "Minced beef skewers with herbs and spices, served with mint chutney",
      price: 12.99,
      category: "grill",
      halal: true,
      popular: true,
      vegetarian: false,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0KT01vL2wG3Fx8c_r4UvXm9DTRNC2vKStg&s",
      tags: ["Halal", "Grilled", "Spicy"],
    },
    {
      id: 3,
      name: "Mutton Korma",
      description: "Tender mutton in rich, creamy cashew and yogurt gravy",
      price: 18.99,
      category: "curry",
      halal: true,
      special: true,
      vegetarian: false,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sub1oy5_6GkxA_vfzVa_cZZAtf7kuyyBTw&s",
      tags: ["Halal", "Creamy", "Special"],
    },
    {
      id: 4,
      name: "Chicken Shawarma",
      description: "Marinated chicken strips in pita bread with garlic sauce",
      price: 8.99,
      category: "grill",
      halal: true,
      popular: true,
      vegetarian: false,
      image:
        "https://theflavoursofkitchen.com/wp-content/uploads/2022/02/chicken-shawarma-recipe-3.jpg",
      tags: ["Halal", "Quick", "Popular"],
    },
    {
      id: 5,
      name: "Falafel Platter",
      description: "Crispy chickpea balls with hummus, tahini, and pita bread",
      price: 10.99,
      category: "appetizer",
      halal: true,
      vegetarian: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nKFbiiiWelzP9qvDGH-skvLM_QfrLi41Cw&s",
      tags: ["Halal", "Vegetarian", "Healthy"],
    },
    {
      id: 6,
      name: "Dates Milkshake",
      description: "Nutritious shake made with fresh dates, milk, and almonds",
      price: 5.99,
      category: "beverage",
      halal: true,
      vegetarian: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4of4Qr4lDqo2LD1DmtfwDtIJQRTnuZf6sw&s",
      tags: ["Halal", "Healthy", "Sweet"],
    },
    {
      id: 7,
      name: "Kunafa",
      description:
        "Arabic dessert with shredded pastry, cheese, and sugar syrup",
      price: 9.99,
      category: "dessert",
      halal: true,
      special: true,
      vegetarian: true,
      image:
        "https://butfirstchai.com/wp-content/uploads/2020/06/Cream-kunafa-recipe-500x375.jpg",
      tags: ["Halal", "Dessert", "Cheesy"],
    },

    // ================= NON-HALAL SECTION =================
    {
      id: 8,
      name: "Pepperoni Pizza",
      description: "Classic pizza with pepperoni, mozzarella, and tomato sauce",
      price: 16.99,
      category: "pizza",
      halal: false,
      popular: true,
      vegetarian: false,
      image:
        "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Non-Halal", "Cheesy", "Popular"],
    },
    {
      id: 9,
      name: "Bacon Cheeseburger",
      description: "Beef patty with bacon, cheese, lettuce, and special sauce",
      price: 14.99,
      category: "burger",
      halal: false,
      popular: true,
      vegetarian: false,
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Non-Halal", "Juicy", "Classic"],
    },
    {
      id: 10,
      name: "Pork Ribs",
      description: "BBQ pork ribs with special house sauce, served with fries",
      price: 22.99,
      category: "grill",
      halal: false,
      special: true,
      vegetarian: false,
      image:
        "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Non-Halal", "BBQ", "Special"],
    },
    {
      id: 11,
      name: "Chicken Alfredo Pasta",
      description: "Creamy Alfredo pasta with grilled chicken and parmesan",
      price: 15.99,
      category: "pasta",
      halal: false,
      popular: true,
      vegetarian: false,
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Non-Halal", "Creamy", "Pasta"],
    },
    {
      id: 12,
      name: "Salami Platter",
      description: "Assorted Italian cured meats with cheese and olives",
      price: 18.99,
      category: "appetizer",
      halal: false,
      special: true,
      vegetarian: false,
      image:
        "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Non-Halal", "Charcuterie", "Special"],
    },
    {
      id: 13,
      name: "Wine Braised Beef",
      description: "Beef slow-cooked in red wine with vegetables and herbs",
      price: 24.99,
      category: "curry",
      halal: false,
      special: true,
      vegetarian: false,
      image:
        "https://images.pexels.com/photos/3493579/pexels-photo-3493579.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Non-Halal", "Gourmet", "Wine"],
    },

    // ================= VEGETARIAN (Both can eat) =================
    {
      id: 14,
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella, and fresh basil",
      price: 12.99,
      category: "pizza",
      halal: true, // Vegetarian is automatically halal
      vegetarian: true,
      popular: true,
      image:
        "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Vegetarian", "Classic", "Halal"],
    },
    {
      id: 15,
      name: "Veggie Burger",
      description: "Plant-based patty with lettuce, tomato, and special sauce",
      price: 11.99,
      category: "burger",
      halal: true,
      vegetarian: true,
      image:
        "https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Vegetarian", "Healthy", "Halal"],
    },
    {
      id: 16,
      name: "Vegetable Biryani",
      description: "Aromatic rice with mixed vegetables and spices",
      price: 10.99,
      category: "biryani",
      halal: true,
      vegetarian: true,
      image:
        "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Vegetarian", "Spicy", "Halal"],
    },
    {
      id: 17,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with Caesar dressing and croutons",
      price: 8.99,
      category: "appetizer",
      halal: true,
      vegetarian: true,
      popular: true,
      image:
        "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tags: ["Vegetarian", "Fresh", "Halal"],
    },
    {
      id: 18,
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with molten center and vanilla ice cream",
      price: 7.99,
      category: "dessert",
      halal: true,
      vegetarian: true,
      popular: true,
      image:
        "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
      tags: ["Vegetarian", "Dessert", "Halal"],
    },
    {
      id: 19,
      name: "Fresh Lemonade",
      description: "Homemade lemonade with mint and honey",
      price: 4.99,
      category: "beverage",
      halal: true,
      vegetarian: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwYm6KpHux_Pvtbe4ypAVg-EmhykJYoK22Q&s",
      tags: ["Vegetarian", "Refreshing", "Halal"],
    },
  ];

  useEffect(() => {
    setMenuItems(globalMenu);
    setFilteredItems(globalMenu);

    // Load cart count
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  useEffect(() => {
    let filtered = menuItems;

    // Search filter
    if (search) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase()),
          ),
      );
    }

    // Category filter
    if (category !== "all") {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Halal/Non-Halal filter
    if (foodType === "halal") {
      filtered = filtered.filter((item) => item.halal === true);
    } else if (foodType === "non-halal") {
      filtered = filtered.filter((item) => item.halal === false);
    } else if (foodType === "vegetarian") {
      filtered = filtered.filter((item) => item.vegetarian === true);
    }

    setFilteredItems(filtered);
  }, [search, category, foodType, menuItems]);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length);

    // Show item details dialog
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const getCategoryColor = (cat) => {
    const colors = {
      biryani: "#d32f2f",
      curry: "#ff9800",
      grill: "#f44336",
      pizza: "#4caf50",
      burger: "#ff5722",
      pasta: "#9c27b0",
      appetizer: "#00bcd4",
      dessert: "#e91e63",
      beverage: "#2196f3",
    };
    return colors[cat] || "#757575";
  };

  const getHalalBadge = (isHalal, isVegetarian) => {
    if (isVegetarian) {
      return (
        <Chip
          icon={<SpaIcon />}
          label="Vegetarian"
          color="success"
          size="small"
          sx={{ fontWeight: "bold", ml: 1 }}
        />
      );
    }
    return isHalal ? (
      <Chip
        icon={<MosqueIcon />}
        label="Halal"
        color="primary"
        size="small"
        sx={{ fontWeight: "bold", ml: 1 }}
      />
    ) : (
      <Chip
        label="Non-Halal"
        color="error"
        size="small"
        variant="outlined"
        sx={{
          fontWeight: "bold",
          ml: 1,
          borderColor: "#f44336",
          color: "#f44336",
        }}
      />
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "primary.dark",
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <RestaurantIcon sx={{ fontSize: 48 }} />
          Global Fusion Kitchen
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Diverse menu for all preferences • Halal & Non-Halal options
        </Typography>
      </Box>

      {/* Search & Filters */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, borderRadius: 3 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems="center"
        >
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Search dishes, ingredients, or tags..."
              variant="outlined"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: { height: 56 },
              }}
            />
          </Box>

          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel>Food Category</InputLabel>
              <Select
                value={category}
                label="Food Category"
                onChange={(e) => setCategory(e.target.value)}
                sx={{ height: 56 }}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.value} value={cat.value}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span>{cat.icon}</span>
                      {cat.label}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel>Food Type</InputLabel>
              <Select
                value={foodType}
                label="Food Type"
                onChange={(e) => setFoodType(e.target.value)}
                sx={{ height: 56 }}
              >
                <MenuItem value="all">🍽️ All Types</MenuItem>
                <MenuItem value="halal">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <MosqueIcon fontSize="small" />
                    Halal Only
                  </Box>
                </MenuItem>
                <MenuItem value="non-halal">🚫 Non-Halal Only</MenuItem>
                <MenuItem value="vegetarian">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <SpaIcon fontSize="small" />
                    Vegetarian Only
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <IconButton
            color="primary"
            onClick={handleCartClick}
            sx={{
              width: 56,
              height: 56,
              bgcolor: "primary.main",
              color: "white",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Stack>
      </Paper>

      {/* Menu Stats */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={6} sm={3}>
          <Paper sx={{ p: 2, textAlign: "center", bgcolor: "#e8f5e9" }}>
            <Typography variant="h6" color="#2e7d32">
              {menuItems.filter((item) => item.halal).length}
            </Typography>
            <Typography variant="body2">Halal Items</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper sx={{ p: 2, textAlign: "center", bgcolor: "#ffebee" }}>
            <Typography variant="h6" color="#d32f2f">
              {menuItems.filter((item) => !item.halal).length}
            </Typography>
            <Typography variant="body2">Non-Halal Items</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper sx={{ p: 2, textAlign: "center", bgcolor: "#f1f8e9" }}>
            <Typography variant="h6" color="#689f38">
              {menuItems.filter((item) => item.vegetarian).length}
            </Typography>
            <Typography variant="body2">Vegetarian</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper sx={{ p: 2, textAlign: "center", bgcolor: "#e3f2fd" }}>
            <Typography variant="h6" color="#1976d2">
              {menuItems.length}
            </Typography>
            <Typography variant="body2">Total Items</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Menu Items Grid */}
      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s",
                border: "2px solid",
                borderColor: item.halal ? "#e8f5e9" : "#ffebee",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 12px 24px ${item.halal ? "rgba(46, 125, 50, 0.2)" : "rgba(211, 47, 47, 0.2)"}`,
                },
              }}
            >
              {/* Badges */}
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                {getHalalBadge(item.halal, item.vegetarian)}
                {item.popular && (
                  <Chip
                    label="Popular"
                    color="warning"
                    size="small"
                    sx={{ fontWeight: "bold" }}
                  />
                )}
              </Box>

              {/* Item Image */}
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
                sx={{
                  objectFit: "cover",
                  bgcolor: item.halal ? "#f1f8e9" : "#ffebee",
                }}
              />
              {/* Card Content */}
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "primary.main",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ${item.price}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  paragraph
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>

                {/* Tags */}
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}
                >
                  {item.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: "0.7rem" }}
                    />
                  ))}
                </Box>

                {/* Category */}
                <Chip
                  label={
                    categories.find((c) => c.value === item.category)?.label ||
                    item.category
                  }
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: getCategoryColor(item.category),
                    color: getCategoryColor(item.category),
                    fontWeight: "medium",
                  }}
                />
              </CardContent>

              {/* Action Button */}
              <Box sx={{ p: 3, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => addToCart(item)}
                  sx={{
                    height: 48,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    bgcolor: item.halal ? "#2e7d32" : "#d32f2f",
                    "&:hover": {
                      bgcolor: item.halal ? "#1b5e20" : "#b71c1c",
                    },
                  }}
                >
                  Add to Order
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <Box
          sx={{
            textAlign: "center",
            py: 12,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Typography variant="h4" color="text.secondary" gutterBottom>
            No items found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try adjusting your filters or search terms
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: 3 }}
            onClick={() => {
              setSearch("");
              setCategory("all");
              setFoodType("all");
            }}
          >
            Clear All Filters
          </Button>
        </Box>
      )}

      {/* Item Added Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        {selectedItem && (
          <>
            <DialogTitle
              sx={{ pb: 2, display: "flex", alignItems: "center", gap: 2 }}
            >
              {/* Replace emoji with real image */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 1,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Box>
                <Typography variant="h6">{selectedItem.name}</Typography>
                {getHalalBadge(selectedItem.halal, selectedItem.vegetarian)}
              </Box>
            </DialogTitle>
            <DialogContent>
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                ${selectedItem.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {selectedItem.description}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "medium", mb: 1 }}>
                Added to cart successfully!
              </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button onClick={() => setOpenDialog(false)} sx={{ mr: 2 }}>
                Continue Shopping
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setOpenDialog(false);
                  navigate("/cart");
                }}
              >
                View Cart ({cartCount} items)
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Menu;
