import React from "react";
import Navbar from "../Components/Navbar";

import { Typography } from "@mui/material";
import Imageslider from "../Components/Imageslider";
import Exploresection from "../Components/Exploresection";
import { Box, Stack } from "@mui/system";
import Featuredsection from "../Components/Featuredsection";

const Mainlayout = () => {
  return (
    <Box sx={{ marginTop: "100px", position: "relative" }}>
      <Navbar />
      <Stack>
        <Typography
          color="#282828"
          sx={{
            fontFamily: "Lexend Deca",
            fontSize: "70px",
            fontWeight: 700,
            lineHeight: "121px",
            marginLeft: "220px",
            marginTop: "100px",
          }}
        >
          SOFTWARE DEVELOPMENT
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lexend Deca",
            fontSize: "70px",
            fontWeight: 700,
            lineHeight: "121px",
            marginLeft: "220px",
            marginBottom: 10,
          }}
          color="#F6BD60"
        >
          MADE EASY
        </Typography>
      </Stack>
      <Imageslider />
      <Exploresection />
      <Featuredsection />
    </Box>
  );
};

export default Mainlayout;
