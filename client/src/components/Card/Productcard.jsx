import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

//style
import "./Productcard.css";

const Productcard = () => {
  const value = 3.5;
  return (
    <>
      <div class="wrapper">
        <Card sx={{ boxShadow: "none" }}>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              className="CardMedia"
              component="img"
              height="auto"
              image="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-61_360x.jpg?v=1613979667"
              alt="straight coat"
              sx={{
                cursor: "pointer",
              }}
            />

            <Box
              width="100%"
              textAlign="center"
              sx={{
                position: "absolute",
                bottom: 30,
              }}
            >
              <Tooltip title="Add to Cart" placement="top" arrow>
                <IconButton class="icon" aria-label="cart" size="large">
                  <ShoppingBasketOutlinedIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Quick View" placement="top" arrow>
                <IconButton class="icon" aria-label="view" size="medium">
                  <ZoomInOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add to Wishlist" placement="top" arrow>
                <IconButton class="icon" aria-label="wishlist" size="medium">
                  <FavoriteBorderIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              component="a"
              sx={{
                cursor: "pointer",
                color: "GrayText",
                "&:hover": {
                  color: "#000",
                },
              }}
            >
              Short straight coat
            </Typography>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
                py: 1,
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>

            <Typography variant="body1" color="text.primary">
              $140.00
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Productcard;
