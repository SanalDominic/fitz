import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Productcard from "../Card/Productcard";
import Typography from "@mui/material/Typography";
import { BannerButton } from "../Theme/Custom";

const product = [
  {
    id: 1,
    title: "Short straight coat",
    image:
      "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-61_360x.jpg?v=1613979667",
    rating: "3",
    price: "140",
  },
  {
    id: 2,
    title: "Short straight coat",
    image:
      "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-111_360x.jpg?v=1613979188",
    rating: "3",
    price: "140",
  },
  {
    id: 3,
    title: "Short straight coat",
    image:
      "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-41_360x.jpg?v=1613978932",
    rating: "3",
    price: "140",
  },
  {
    id: 4,
    title: "Short straight coat",
    image:
      "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-21_360x.jpg?v=1613978332",
    rating: "3",
    price: "140",
  },
];

const Featuredproducts = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fff", px: { xs: 2, sm: 10 } }}>
      <Typography
        variant="h6"
        color="initial"
        textAlign="center"
        pb={4}
        sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
      >
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {product.map((item) => {
          return <Productcard key={item.id} item={item} />;
        })}
      </Grid>
      <Typography textAlign="center" color="initial" p={5}>
        <BannerButton sx={{ border: "1px solid #000" }}>Load More</BannerButton>
      </Typography>
    </Box>
  );
};

export default Featuredproducts;
