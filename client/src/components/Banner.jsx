import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/system";

import { BannerButton } from "./Theme/Custom";
import "./css/Banner.css";

const Banner = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "#fff", p: 5 }}>
        <Container sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Card
                className="overlay"
                sx={{
                  display: "flex",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box className="linestyle" sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/banner_minipage1_720x.jpg?v=1605066485"
                  />

                  <CardActions
                    sx={{
                      position: "absolute",
                      zIndex: 4,
                      bottom: "1.5rem",
                      right: "5rem",
                    }}
                  >
                    <BannerButton variant="contained">
                      New Arrivals
                    </BannerButton>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                className="overlay"
                sx={{
                  display: "flex",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box className="linestyle" sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/banner_minipage2_360x.jpg?v=1605066485"
                  />

                  <CardActions
                    sx={{
                      position: "absolute",
                      zIndex: 4,
                      bottom: "1.5rem",
                      right: "5rem",
                    }}
                  >
                    <BannerButton variant="contained">Women</BannerButton>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                className="overlay"
                sx={{
                  display: "flex",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box className="linestyle" sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/banner_minipage3_360x.jpg?v=1605066486"
                  />

                  <CardActions
                    sx={{
                      position: "absolute",
                      zIndex: 4,
                      bottom: "1.5rem",
                      right: "5rem",
                    }}
                  >
                    <BannerButton variant="contained">Men</BannerButton>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
