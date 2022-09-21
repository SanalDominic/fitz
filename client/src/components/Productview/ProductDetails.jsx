import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const ProductDetails = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Typography mt={2} variant="h5" color="initial">
        Joggers with mesh detail
      </Typography>
      <Box
        pt={1}
        name="hover-feedback"
        sx={{
          display: "flex",
          flexFlow: "row",
          alignItems: "center",
        }}
      >
        <Rating
          size="small"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <span style={{ paddingLeft: "0.5rem" }}>{2} reviews</span>
      </Box>
      <Typography variant="h5" color="text.primary" pt={3}>
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
      <Box mt={3}>
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
      <Box mt={3}>
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
