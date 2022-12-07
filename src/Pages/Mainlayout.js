import React from "react";

import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Navbar from "../Components/MainLayout/Navbar";
import Imageslider from "../Components/MainLayout/Imageslider";
import Exploresection from "../Components/MainLayout/Exploresection";
import Featuredsection from "../Components/MainLayout/Featuredsection";
import Uncategorizedsection from "../Components/MainLayout/Uncategorizedsection";
import Awards from "../Components/MainLayout/Awards ";
import Clients from "../Components/MainLayout/Clients";
import Contactsection from "../Components/MainLayout/Contactsection";
import Footer from "../Components/MainLayout/Footer";

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
            marginTop: "100px",
            marginLeft: "50px",
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
            marginLeft: "50px",
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
      <Uncategorizedsection />
      <Awards />
      <Clients />
      <Contactsection />
      <Footer />
    </Box>
  );
};

export default Mainlayout;
