import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

import Landingpage from "./pages/Landingpage";
import Products from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";
import Wishlist from "./pages/Wishlist";
import ShoppingCart from "./pages/ShoppingCart";
import Productview from "./pages/Productview";

import Test from "./pages/Test.jsx";

function App() {
     return (
          <>
               <Box>
                    <Navbar />
               </Box>
               <Box>
                    <ToastContainer
                         position="top-right"
                         autoClose={1500}
                         hideProgressBar={false}
                         transition={Zoom}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                    />

                    <Routes>
                         <Route path="/" element={<Landingpage />}></Route>
                         <Route path="/products" element={<Products />}></Route>
                         <Route path="/wishlist" element={<Wishlist />} />
                         <Route path="/cart" element={<ShoppingCart />} />
                         <Route
                              path="/product"
                              element={<Productview />}
                         ></Route>
                         <Route path="/test" element={<Test />}></Route>
                    </Routes>
               </Box>
          </>
     );
}

export default App;
