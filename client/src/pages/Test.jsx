import React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Test = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Grid container >
            <Grid item display={{ xs: "none", sm: "block" }} sm={6}>
              <CardMedia
                component="img"
                image="https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg"
                alt="Live from space album cover"
              />
            </Grid>
            <Grid item xs={6}  sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  backgroundColor: "white",
                }}>
              <Box
               
              >
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
          {/* <CardMedia
            component="img"
            image="https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg"
            alt="Live from space album cover"
          /> */}
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
            </CardContent>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default Test;
