import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import "./styles.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CarouselButton } from "../Theme/Custom";
import "../css/Carousel.css";

// import required modules
import { Autoplay, EffectFade, Pagination, Mousewheel, Keyboard } from "swiper";

const Carouselslide = () => {
  return (
    <>
      <Swiper
        rewind={true}
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {/* <SwiperSlide style={{ display: "relative" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/img-slider-home-mini.png?v=1605086177"
            alt="carouselimg"
          />
          <Box sx={{ position: "absolute" }}>
            <Typography
              className="carouselheading"
              variant="h2"
              sx={{
                fontWeight: "400",
                fontSize: "5rem",
              }}
            >
              Enjoy This
              <br /> Winter Trend
            </Typography>
            <Typography
              className="carouseltext"
              sx={{
                m: 2,
                color: "GrayText",
                fontSize: "1.5rem",
              }}
            >
              Discover now latesr Collection
            </Typography>
            <CarouselButton variant="outlined">Shop now</CarouselButton>
          </Box>
        </SwiperSlide>  
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/img-slider-home-mini-2.png?v=1605086177"
            alt="carouselimg"
          />
          <Box sx={{ position: "absolute" }}>
            <Typography
              className="carouselheading"
              variant="h2"
              sx={{
                fontWeight: "400",
                fontSize: "5rem",
              }}
            >
              Enjoy This
              <br /> Winter Trend
            </Typography>
            <Typography
              className="carouseltext"
              sx={{
                m: 2,
                color: "GrayText",
                fontSize: "1.5rem",
              }}
            >
              Discover now latesr Collection
            </Typography>
            <CarouselButton variant="outlined">Shop now</CarouselButton>
          </Box>
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/img-slider-home-mini-3.png?v=1605086177"
            alt="carouselimg"
          />
          <Box sx={{ position: "absolute",right:'25%' }}>
            <Typography
              className="carouselheading"
              variant="h2"
              sx={{
                fontWeight: "400",
                fontSize: "5rem",
              }}
            >
              Enjoy This
              <br /> Winter Trend
            </Typography>
            <Typography
              className="carouseltext"
              sx={{
                m: 2,
                color:'GrayText',
                fontSize: "1.5rem",
              }}
            >
              Discover now latest Collection
            </Typography>
            <CarouselButton variant="outlined">Shop now</CarouselButton>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carouselslide;
