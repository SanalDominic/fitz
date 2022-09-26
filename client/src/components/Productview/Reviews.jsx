import React, { useState } from "react";
import { Button, Grid, Rating, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
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

const Reviews = () => {
  const [value, setValue] = useState(2);
  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState(-1);
  return (
    <>
      <Typography variant="subtitle1">Customer Reviews</Typography>
      <Box
        pt={1}
        name="hover-feedback"
        sx={{
          display: "flex",
          flexFlow: "row",
          alignItems: "center",
        }}
      >
        <Rating name="read-only" value={2} size="small" readOnly />
        <span style={{ paddingLeft: "0.5rem" }}>{1} review</span>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">Leave a comment</Typography>
        <Box component="form">
          <Grid container spacing={1}>
            <Grid item mt={2} xs={6}>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Name *"
                variant="standard"
              />
            </Grid>
            <Grid item mt={2} xs={6}>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="E-mail *"
                variant="standard"
              />
            </Grid>
            <Grid item mt={2} xs={12}>
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
            </Grid>
            <Grid item mt={2} xs={12}>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Give your review a title"
                variant="standard"
              />
            </Grid>
            <Grid item my={2} xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                id="standard-basic"
                placeholder="Write your comments here"
                variant="standard"
              />
            </Grid>
            <Box mt={2} width="100%" display="flex" justifyContent="end">
              <Button
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
                Submit
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Reviews;
