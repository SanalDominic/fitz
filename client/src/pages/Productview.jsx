import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

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

const Productview = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <>
      <Box
        sx={{
          mt: 2,
          pt: 5,
          flexGrow: 1,
          backgroundColor: "#fff",
          px: { xs: 2, sm: 10 },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            dsfdgffgfdg
          </Grid>
          <Grid item xs={4}>
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
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <span style={{ paddingLeft: "0.5rem" }}>{2} reviews</span>
            </Box>
            <Typography variant="h5" color="text.primary" pt={2}>
              $140.00
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Productview;
