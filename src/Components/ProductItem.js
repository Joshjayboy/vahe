import React, { useState } from "react";
import Modal from "react-modal";

// material ui api
// import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Item from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Icon } from "@material-ui/core";
import Box from "@mui/material/Box";
// end of material ui api

const ProductItem = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        xs={6}
        sm={6}
        md={5}
        lg={3}
        xl={3}
        sx={{
          justifyContent: "space-around",
          margin: "-20px",
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        <Grid
          //   item

          sx={{ padding: "20px", margin: 0, boxSizing: "border-box" }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* <Item> */}
          <Card
            sx={{
              maxWidth: 260,
              justifyContent: "space-around",
              boxShadow: "0px 0px 0px 0.7px rgb(0 0 0 / 12%)",
              borderRadius: "10px",
              transition:
                "transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            <CardMedia sx={{ display: "flex" }} />
            {product.imageUrl && (
              <Typography style={{ position: "relative" }}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  height="256px"
                  width="256px"
                  //   position="relative"
                />
                <Box
                  sx={{
                    top: "10px",
                    right: "10px",
                    width: "24px",
                    cursor: "pointer",
                    height: "24px",
                    position: "absolute",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20.483 18.921"
                  >
                    <path
                      d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
                      transform="translate(0.524 0.507)"
                      fill="none"
                      stroke="#ea1f4d"
                      strokeWidth="1"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Box>
              </Typography>
            )}

            <CardContent sx={{ padding: "16px" }}>
              <Box
                variant="body2"
                color="text.secondary"
                sx={{ height: "40px" }}
              >
                <Typography
                  sx={{
                    lineHeight: 1.57,
                    fontSize: "0.875rem",
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#424242",
                  }}
                >
                  {product.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <CardActions sx={{ display: "flex" }}>
                  <Box sx={{ lineHeight: "14px" }}>
                    <Box
                      sx={{
                        color: "#424242",
                      }}
                    >
                      <IconButton
                        sx={{
                          fontSize: "14px",
                          fontWeight: 900,
                        }}
                      >
                        {product.price}
                      </IconButton>
                      <IconButton
                        sx={{
                          fontSize: "9px",
                          fontWeight: 900,
                          //   marginLeft: "1.6px",
                        }}
                      >
                        AMD
                      </IconButton>
                    </Box>
                  </Box>
                </CardActions>
                <Box sx={{ cursor: "pointer" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g transform="translate(-108 -187)">
                      <rect
                        width="24"
                        height="24"
                        transform="translate(108 187)"
                        fill="none"
                      ></rect>
                      <g transform="translate(111.236 190)">
                        <path
                          transform="translate(-150.521 -575.212)"
                          fill="#ea1f4d"
                          d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
                        ></path>
                        <path
                          transform="translate(-143 -565.996)"
                          fill="#ea1f4d"
                          d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
                        ></path>
                        <path
                          transform="translate(-151.556 -594.956)"
                          fill="#ea1f4d"
                          d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
                        ></path>
                        <path
                          transform="translate(-167.351 -594.956)"
                          fill="#ea1f4d"
                          d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
                        ></path>
                        <path
                          transform="translate(-160.111 -569.289)"
                          fill="#ea1f4d"
                          d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* card two */}

          {/* <Card
            sx={{
              maxWidth: 260,
              justifyContent: "space-around",
              boxShadow: "0px 0px 0px 0.7px rgb(0 0 0 / 12%)",
              borderRadius: "10px",
              transition:
                "transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            <CardMedia sx={{ display: "flex" }} />
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                height="256px"
                width="256px"
              ></img>
            )}

            <CardContent sx={{ padding: "16px" }}>
              <Box
                variant="body2"
                color="text.secondary"
                sx={{ height: "40px" }}
              >
                <Typography
                  sx={{
                    lineHeight: 1.57,
                    fontSize: "0.875rem",
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#424242",
                  }}
                >
                  {product.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "16px",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ lineHeight: "14px" }}>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: 900,
                        color: "#424242",
                      }}
                    >
                      {product.price}
                    </Box>
                    <Box
                      sx={{
                        fontSize: "9px",
                        fontWeight: 900,
                        marginLeft: "1.6px",
                      }}
                    >
                      AMD
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ cursor: "pointer" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g transform="translate(-108 -187)">
                      <rect
                        width="24"
                        height="24"
                        transform="translate(108 187)"
                        fill="none"
                      ></rect>
                      <g transform="translate(111.236 190)">
                        <path
                          transform="translate(-150.521 -575.212)"
                          fill="#ea1f4d"
                          d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
                        ></path>
                        <path
                          transform="translate(-143 -565.996)"
                          fill="#ea1f4d"
                          d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
                        ></path>
                        <path
                          transform="translate(-151.556 -594.956)"
                          fill="#ea1f4d"
                          d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
                        ></path>
                        <path
                          transform="translate(-167.351 -594.956)"
                          fill="#ea1f4d"
                          d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
                        ></path>
                        <path
                          transform="translate(-160.111 -569.289)"
                          fill="#ea1f4d"
                          d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </Box>
              </Box>
            </CardContent>
          </Card> */}
          {/* end of card two */}
          {/* </Item> */}
        </Grid>
      </Grid>

      {/* <div className="product-item">
        <Modal isOpen={modalOpen} onRequestClose={closeModal}>
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          <h2>{product.name}</h2>
          {product.imageUrl && (
            <img
              src={product.imageUrl}
              alt={product.name}
              height="500px"
              width="500px"
            />
          )}
          <p>{product.description}</p>
        </Modal>
      </div> */}
    </>
  );
};

export default ProductItem;
