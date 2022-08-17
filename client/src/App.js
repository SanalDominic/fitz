import React from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Products from "./pages/Products";
import { Box } from "@mui/system";

function App() {
  return (
    <>
      <Box
        // sx={{
        //   mx: 2,
        // }}
      >
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
