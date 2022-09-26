import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TableRowsIcon from "@mui/icons-material/TableRows";

import Productcard from "../Card/Productcard";
import { Stack } from "@mui/system";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const product = [
     {
          id: 1,
          title: "Short straight coat",
          image: "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-61_360x.jpg?v=1613979667",
          rating: "3",
          price: "140",
     },
     {
          id: 2,
          title: "Short straight coat",
          image: "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-111_360x.jpg?v=1613979188",
          rating: "3",
          price: "140",
     },
     {
          id: 3,
          title: "Short straight coat",
          image: "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-41_360x.jpg?v=1613978932",
          rating: "3",
          price: "140",
     },
     {
          id: 4,
          title: "Short straight coat",
          image: "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-21_360x.jpg?v=1613978332",
          rating: "3",
          price: "140",
     },
];

const ShowProducts = () => {
     const [grid, setGrid] = useState(1);
     return (
          <>
               <Box>
                    <Stack
                         sx={{ cursor: "pointer" }}
                         direction="row"
                         spacing={2}
                         mb={3}
                    >
                         <Box display="flex">
                              <Typography
                                   variant="subtitle1"
                                   mr={1}
                                   color="initial"
                              >
                                   View as
                              </Typography>
                              <Box onClick={() => setGrid(1)}>
                                   <TableRowsIcon style={{ rotate: "90deg" }} />
                              </Box>
                              <Box onClick={() => setGrid(2)}>
                                   <TableRowsIcon />
                              </Box>
                              <Box onClick={() => setGrid(0)}>
                                   <TableRowsIcon style={{ rotate: "90deg" }} />
                              </Box>
                         </Box>
                    </Stack>
                    <Grid container columnSpacing={4}>
                         {product.map((item) => {
                              return (
                                   <Productcard
                                        key={item.id}
                                        item={item}
                                        grid={grid}
                                   />
                              );
                         })}
                    </Grid>
               </Box>
          </>
     );
};

export default ShowProducts;
