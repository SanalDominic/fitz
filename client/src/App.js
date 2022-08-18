import React from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Products from "./pages/Products";
import { Box } from "@mui/system";
import Navbar from "./components/Navbar";

import Test from "./pages/Test";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
