import React from "react";
import { Box } from "@mui/material";
import Cart from "../components/Cart/Cart";

const ShoppingCart = () => {
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
                    <Cart />
               </Box>
               <Box>Order Summary</Box>
          </>
     );
};

export default ShoppingCart;
