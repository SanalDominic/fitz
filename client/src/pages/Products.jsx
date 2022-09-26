import React from "react";
import { Box, Grid } from "@mui/material";

import ProductFilter from "../components/AllProducts/ProductFilter";
import ShowProducts from "../components/AllProducts/ShowProducts";
const Products = () => {
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
                         <Grid
                              item
                              xs={2}
                              md={2}

                              sx={{
                                   display: { xs: "none", md: "block" },
                              }}
                         >
                              <ProductFilter />
                         </Grid>
                         <Grid item xs={12} md={10}>
                              <ShowProducts />
                         </Grid>
                    </Grid>
               </Box>
          </>
     );
};

export default Products;
