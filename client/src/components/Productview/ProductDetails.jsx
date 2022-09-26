import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Typography mt={2} variant="h5" color="initial">
        Joggers with mesh detail
      </Typography>
      <Box
        pt={4}
        name="hover-feedback"
        sx={{
          display: "flex",
          flexFlow: "row",
          alignItems: "center",
        }}
      >
        <Rating name="read-only" value={2} size="small" readOnly />
        <span style={{ paddingLeft: "0.5rem" }}>{2} reviews</span>
      </Box>

      <Typography variant="h5" color="text.primary" pt={1}>
        $140.00
      </Typography>
      <Box
        pt={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setQuantity(Math.max(quantity - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <input
            className="number"
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>

          <Button
            aria-label="increase"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        <Button
          fullWidth
          sx={{
            ml: 1,
            borderRadius: "unset",
            height: "3.375rem",
            backgroundColor: "#000",
            px: 4,
            "&:hover": {
              backgroundColor: "#000",
            },
          }}
          variant="contained"
        >
          ADD TO CART
        </Button>
        <Button
          sx={{
            ml: 1,
            borderRadius: "unset",
            height: "3.375rem",
            minWidth: "auto",
            borderColor: "#000",
            color: "#000",
            px: 2,
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
            },
          }}
          variant="outlined"
        >
          <FavoriteBorderIcon />
        </Button>
      </Box>
      <Box mt={1}>
        <Button
          fullWidth
          sx={{
            borderRadius: "unset",
            height: "3.375rem",
            backgroundColor: "#000",
            px: 4,
            "&:hover": {
              backgroundColor: "#000",
            },
          }}
          variant="contained"
        >
          BUY IT NOW
        </Button>
      </Box>
      <Box mt={4}>
        <Typography variant="subtitle1" color="initial" textAlign="justify">
          Cut from light and fluid mushroom washed silk-georgette, it’s designed
          with a wrap-effect front and a longer back hem for extra coverage.
          Team it with your favorite jeans and heels.
        </Typography>
        <ol className="ol">
          <li> Availability : {"In Stock"}</li>
          <li>Delivery & Return</li>
        </ol>
      </Box>
    </>
  );
};

export default ProductDetails;
