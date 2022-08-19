import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
//import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

const Productcard = () => {
  const [show, setShow] = useState(false);
  // const [translate, setTranslate] = "translateY(60px)";

  // const setStyle = (tra) => {
  //   setTranslate(tra);
  // };

  const setVisibility = () => {
    setShow(true);
  };

  const setHidden = () => {
    setShow(false);
  };

  const action = {
    backgroundColor: "#fff",
    borderRadius: "unset",
    // transform: `${translate}`,
    transition: "all .5s ease 0s",
    margin: "0 0.2rem",
    "&:hover": {
      backgroundColor: "#000 !important",
      color: "#fff",
      transition: "all .5s ease 0s",
      transitionDelay: " .1s",
    },
  };

  const value = 3.5;
  return (
    <>
      <Card sx={{ boxShadow: "none" }}>
        <Box
          sx={{ position: "relative" }}
          onMouseOver={setVisibility}
          onMouseOut={setHidden}
          // onMouseOver={() => setStyle("translateY(0px)")}
          // onMouseOut={() => setStyle("translateY(60px)")}
        >
          <CardMedia
            component="img"
            height="auto"
            image="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-1111_720x.jpg?v=1613980009"
            alt="straight coat"
            sx={{
              cursor: "pointer",
            }}
          />
          {show && (
            <Box
              className="show"
              width="100%"
              textAlign="center"
              sx={{
                position: "absolute",
                bottom: 30,
              }}
            >
              <Tooltip title="Add to Cart" placement="top" arrow>
                <IconButton aria-label="cart" size="medium" sx={action}>
                  <ShoppingBasketOutlinedIcon fontSize="2rem" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Quick View" placement="top" arrow>
                <IconButton aria-label="view" size="medium" sx={action}>
                  <ZoomInOutlinedIcon fontSize="2rem" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add to Wishlist" placement="top" arrow>
                <IconButton aria-label="wishlist" size="medium" sx={action}>
                  <FavoriteBorderIcon fontSize="2rem" />
                </IconButton>
              </Tooltip>
            </Box>
          )}
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

          <Typography variant="body1" color="text.secondary">
            $140.00
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Productcard;
