import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import "./css/Banner.css";

export const CarouselButton = styled(Button)({
  boxShadow: "none",
  lineHeight: 1.5,
  letterSpacing: 1.5,
  fontSize: 16,
  textTransform: "none",
  padding: "1rem",
  backgroundColor: "#fff",
  borderRadius: "unset",
  color: "#000",
  "&:hover": {
    backgroundColor: "#000",
    borderColor: "#000",
    boxShadow: "none",
    color: "#fff",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#000",
    borderColor: "#000",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

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
                      zIndex: 2,
                      bottom: "1.5rem",
                      right: "5rem",
                    }}
                  >
                    <CarouselButton variant="contained">
                      New Arrivals
                    </CarouselButton>
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
                      zIndex: 2,
                      bottom: "1.5rem",
                      right: "5rem",
                    }}
                  >
                    <CarouselButton variant="contained">Women</CarouselButton>
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
                      zIndex: 2,
                      bottom: "1.5rem",
                      right: "5rem",
                    }}
                  >
                    <CarouselButton variant="contained">Men</CarouselButton>
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
