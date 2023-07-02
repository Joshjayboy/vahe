import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { BACKEND_BASE_URL } from "../Constants/AppConstants";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/products`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          Cookie: "JSESSIONID=CA5696E69CC8087799286FBD15245034",
        },
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <Box sx={{ margin: "21px" }}>
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
          Noodles
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, justifyContent: "space-between" }}>
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
    </>
  );
};

export default ProductsList;
