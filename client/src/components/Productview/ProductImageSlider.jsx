import React, { useState } from "react";
import Slider from "react-slick";
// import { Grid } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { v4 as uuidv4 } from "uuid";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
     {
          id: 1,
          src: "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-141_1024x1024@2x.jpg?v=1613978764",
          alt: "The world",
     },
     {
          id: 2,
          src: "https://cdn.shopify.com/s/files/1/0421/6153/7180/products/minimalist-img-14_1024x1024@2x.jpg?v=1613979471",
          alt: "Train",
     },
];

const ProductImageSlider = () => {
     const [nav1, setNav1] = useState();
     const [nav2, setNav2] = useState();

     return (
          <>
               <Grid
                    container
                    spacing={1}
                    sx={{ flexFlow: { xs: "column", sm: "row" } }}
               >
                    <Grid
                         item
                         xs={4}
                         xsOffset={4}
                         sm={2}
                         smOffset={0}
                         order={{ xs: 1, sm: 0 }}
                    >
                         <Slider
                              asNavFor={nav1}
                              ref={(slider2) => setNav2(slider2)}
                              slidesToShow={2}
                              swipeToSlide={true}
                              focusOnSelect={true}
                              className="navigator"
                         >
                              {images.map((img) => {
                                   return (
                                        <img
                                             key={uuidv4()}
                                             src={`${img.src}`}
                                             alt="slider nav"
                                        />
                                   );
                              })}
                         </Slider>
                    </Grid>
                    <Grid item xs={12} sm={10} order={{ xs: 0, sm: 1 }}>
                         <Slider
                              dots={false}
                              swipeToSlide={true}
                              asNavFor={nav2}
                              ref={(slider1) => setNav1(slider1)}
                         >
                              {images.map((image) => {
                                   return (
                                        <img
                                             key={uuidv4()}
                                             src={`${image.src}`}
                                             alt="slider"
                                        />
                                   );
                              })}
                         </Slider>
                    </Grid>
               </Grid>
          </>
     );
};

export default ProductImageSlider;
