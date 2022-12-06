import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

import Portfolioimg1 from "../asests/Images/portfolioimg1.png";
import Recimply from "../asests/Images/Recimply.png";
import Kahaniya from "../asests/Images/Kahaniya.png";
import Trendition from "../asests/Images/Trendition.png";

const LeftInfo = [
  {
    id: 0,
    img: Portfolioimg1,
    title: "Pika Bikes Booking Application",
    about: "Developement, Mobile application",
  },
  {
    id: 1,
    img: Kahaniya,
    title: "Kahaniya IOS Application",
    about: "Application, Branding",
  },
];

const RightInfo = [
  {
    id: 0,
    img: Recimply,
    title: "Recimply Mobile Application",
    about: "Developement, Mobile application",
  },
  {
    id: 1,
    img: Trendition,
    title: "Trendition Online",
    about: "Branding, eCommerce, Print",
  },
];

const Exploresection = () => {
  return (
    <Box sx={{ margin: "150px 0px 100px 170px" }}>
      <Stack direction="row" spacing={24}>
        <Stack direction="column">
          <Stack direction="column" justifyContent="flex-start">
            <Typography
              sx={{
                fontFamily: "Lexend Deca",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "21.6px",
              }}
            >
              EXPLORE RECENT WORKS
            </Typography>
            <Typography
              sx={{
                margin: "20px 0px",
                fontFamily: "Space Grotesk",
                fontSize: "16px",
              }}
            >
              We’re constantly refining our product. Adding new <br /> features.
              Working to help your section business
              <br /> grow.
            </Typography>
            <Box
              sx={{
                width: "160px",
                backgroundColor: "#282828",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              <Typography
                align="center"
                sx={{
                  p: 2,
                  fontFamily: "Lexend Deca",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                LEARN MORE --
              </Typography>
            </Box>
          </Stack>
          <Stack direction="column">
            {LeftInfo.map((item) => (
              <Stack
                direction="column"
                sx={{ marginBottom: "45px", cursor: "pointer" }}
              >
                <img src={item.img} width="770px" height="730px" alt="" />
                <Typography
                  sx={{
                    fontFamily: "Lexend Deca",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "32px",
                    mt: 3,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography>{item.about}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack direction="column">
          {RightInfo.map((item) => (
            <Stack
              direction="column"
              sx={{ marginBottom: "45px", cursor: "pointer" }}
            >
              <img src={item.img} width="770px" height="730px" alt="" />
              <Typography
                sx={{
                  fontFamily: "Lexend Deca",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "32px",
                  mt: 3,
                }}
              >
                {item.title}
              </Typography>
              <Typography>{item.about}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Exploresection;
