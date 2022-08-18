import React from "react";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AccountMenu from "./subComponents/AccountMenu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { Link as Rlink } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          px: 3,
          backgroundColor: "#2c2c2c",
          height: "1.5rem",
        }}
      ></Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          px: 3,
          backgroundColor: "#fff",
          height: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            color="black"
            aria-label="logo"
            underline="none"
            sx={{ fontWeight: "medium" }}
          >
            FITZ
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="body1" underline="none">
            <Rlink to="/">Home</Rlink>
          </Typography>
          <Typography variant="body1" to="/products" underline="none">
          <Rlink to="/products">Products</Rlink>
          </Typography>
          <Typography variant="body1" to="/products" underline="none">
          <Rlink to="/test">test</Rlink>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <AccountMenu />
          <Tooltip title="Search">
            <IconButton color="inherit" aria-label="search">
              <SearchIcon></SearchIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Wish list">
            <IconButton color="inherit" aria-label="wishlist">
              <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Cart">
            <IconButton color="inherit" aria-label="cart">
              <ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
