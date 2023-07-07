import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { BACKEND_BASE_URL } from "../Constants/AppConstants";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logout from "./Logout";
import axios from "axios";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BACKEND_BASE_URL}/products`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          Cookie: "JSESSIONID=CA5696E69CC8087799286FBD15245034",
        },
      });
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const groupByCategory = (products) => {
    return products.reduce((groups, product) => {
      const category = product.productCategory.name;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(product);
      return groups;
    }, {});
  };

  const productsByCategory = groupByCategory(products);
  const categories = Object.keys(productsByCategory);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filterProducts = (products) => {
    if (search.length > 3) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedCategory) {
      products = products.filter(
        (product) => product.productCategory.name === selectedCategory
      );
    }
    return products;
  };

  return (
    <>
      <Logout />

      <Box>
        {/* Search input */}
        <Box sx={{ display: "flex", alignItems: "center", margin: "21px" }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search products…"
            inputProps={{ "aria-label": "search products" }}
            onChange={handleSearchChange}
          />
        </Box>

        {/* Category list */}
        <Box sx={{ margin: "21px" }}>
          <Typography sx={{ marginBottom: "20px" }}>Categories:</Typography>
          <List>
            <ListItem
              button
              key="All"
              onClick={() => handleCategorySelect(null)}
            >
              <ListItemText primary="All categories" />
            </ListItem>
            {categories.map((category) => (
              <ListItem
                button
                key={category}
                onClick={() => handleCategorySelect(category)}
              >
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Products list */}
      <Box sx={{ flexGrow: 1, justifyContent: "space-between" }}>
        {Object.entries(productsByCategory).map(([category, products]) => {
          products = filterProducts(products);
          if (products.length === 0) return null;

          return (
            <Box key={category} sx={{ margin: "21px" }}>
              <Typography
                sx={{
                  padding: 0,
                  fontSize: "24px",
                  fontWeight: "bold",
                  lineHeight: "33px",
                  color: "#c5022e",
                  margin: "10px",
                  marginBottom: "50px",
                }}
              >
                {category}
              </Typography>

              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {products.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </Grid>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ProductsList;
