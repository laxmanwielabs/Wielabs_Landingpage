import { Stack } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../asests/Images/Wielabslogo.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavItems = [
  {
    id: 0,
    name: "Agensy",
    path: "/agency",
  },
  {
    id: 1,
    name: "Cases",
    path: "/cases",
  },
  {
    id: 2,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ marginLeft: "150px", position: "fixed", top: "20px", zIndex: 1 }}
    >
      <Stack direction="row" alignItems="center" spacing={100}>
        <Stack direction="row" spacing={4} alignItems="center">
          <img
            src={Logo}
            width="304px"
            height="80px"
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          />
          <Typography
            sx={{
              fontFamily: "Lexend Deca",
              fontSize: "15px",
              lineHeight: "22px",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            T: +330 294 05 11
          </Typography>
        </Stack>
        <Stack direction="row" spacing={6}>
          <Stack direction="row" spacing={3}>
            {NavItems.map((item) => (
              <Typography
                sx={{
                  fontFamily: "Lexend Deca",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "22px",
                  fontStyle: "normal",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`${item.path}`);
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Stack>
          <MenuIcon sx={{ cursor: "pointer" }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
