import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Productcard from "../Card/Productcard";
import Typography from "@mui/material/Typography";
import { BannerButton } from "../Theme/Custom";

const Featuredproducts = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fff", px: { xs: 2, sm: 10 } }}>
      <Typography
        variant="h3"
        color="initial"
        textAlign="center"
        pb={4}
        sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
      >
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} xl={3} xxl={2}>
          <Productcard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3} xxl={2}>
          <Productcard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3} xxl={2}>
          <Productcard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3} xxl={2}>
          <Productcard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3} xxl={2}>
          <Productcard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3} xxl={2}>
          <Productcard />
        </Grid>
      </Grid>
      <Typography textAlign="center" color="initial" p={5}>
        <BannerButton sx={{ border: "1px solid #000" }}>Load More</BannerButton>
      </Typography>
    </Box>
  );
};

export default Featuredproducts;
