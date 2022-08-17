import React from "react";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import './css/Navbar.css'

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
          <Link 
          variant="h5" 
          color="black" 
          aria-label="logo" 
          underline="none" 
          sx={{fontWeight:'medium'}}>
            FITZ
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Link variant="body1" to="/" underline="none" active>
            Home
          </Link>
          <Link variant="body1" to="/products" underline="none">
            Products
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <PersonOutlineIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon></SearchIcon>
          </IconButton>
          <IconButton color="inherit" aria-label="wishlist">
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </IconButton>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon>
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
