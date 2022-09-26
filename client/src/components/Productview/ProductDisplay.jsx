import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ProductImageSlider from "./ProductImageSlider";
import ProductDetails from "./ProductDetails";

//style
import "./ProductDisplay.css";
import MoreDetails from "./MoreDetails";

const ProductDisplay = () => {
  return (
    <>
      <Box
        sx={{
          mt: 2,
          pt: 5,
          flexGrow: 1,
          backgroundColor: "#fff",
          px: { xs: 2, sm: 10 },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ProductImageSlider />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductDetails />
          </Grid>
        </Grid>

        <Box>
          <MoreDetails />
        </Box>
      </Box>
    </>
  );
};

export default ProductDisplay;
