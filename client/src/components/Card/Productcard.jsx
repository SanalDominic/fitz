import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Grid } from "@mui/material";

//style
import "./Productcard.css";

const Productcard = ({ item, grid = 0 }) => {
     const value = 3.5;
     return (
          <>
               <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    xl={grid === 0 ? 2 : grid === 1 ? 3 : 4}
                    xxl={2}
               >
                   
                    <Card className="wrapper" sx={{ boxShadow: "none" }}>
                         <Box sx={{ position: "relative" }}>
                              <CardMedia
                                   className="CardMedia"
                                   component="img"
                                   height="auto"
                                   image={`${item.image}`}
                                   alt="straight coat"
                                   sx={{
                                        cursor: "pointer",
                                   }}
                              />

                              <Box
                                   width="100%"
                                   textAlign="center"
                                   sx={{
                                        position: "absolute",
                                        bottom: 30,
                                   }}
                              >
                                   <Tooltip
                                        title="Add to Cart"
                                        placement="top"
                                        arrow
                                   >
                                        <IconButton
                                             class="icon"
                                             aria-label="cart"
                                             size="large"
                                        >
                                             <ShoppingBasketOutlinedIcon />
                                        </IconButton>
                                   </Tooltip>

                                   <Tooltip
                                        title="Quick View"
                                        placement="top"
                                        arrow
                                   >
                                        <IconButton
                                             class="icon"
                                             aria-label="view"
                                             size="medium"
                                        >
                                             <ZoomInOutlinedIcon />
                                        </IconButton>
                                   </Tooltip>
                                   <Tooltip
                                        title="Add to Wishlist"
                                        placement="top"
                                        arrow
                                   >
                                        <IconButton
                                             class="icon"
                                             aria-label="wishlist"
                                             size="medium"
                                        >
                                             <FavoriteBorderIcon />
                                        </IconButton>
                                   </Tooltip>
                              </Box>
                         </Box>
                         <CardContent>
                              <Typography
                                   gutterBottom
                                   variant="body1"
                                   component="a"
                                   sx={{
                                        cursor: "pointer",
                                        color: "GrayText",
                                        "&:hover": {
                                             color: "#000",
                                        },
                                   }}
                              >
                                   Short straight coat
                              </Typography>
                              <Box
                                   sx={{
                                        width: 200,
                                        display: "flex",
                                        alignItems: "center",
                                        py: 1,
                                   }}
                              >
                                   <Rating
                                        name="text-feedback"
                                        value={value}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={
                                             <StarIcon
                                                  style={{ opacity: 0.55 }}
                                                  fontSize="inherit"
                                             />
                                        }
                                   />
                              </Box>

                              <Typography variant="body1" color="text.primary">
                                   $140.00
                              </Typography>
                         </CardContent>
                    </Card>
               </Grid>
          </>
     );
};

export default Productcard;
