import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Icon1 from "../../asests/Icons/icon01.png";
import Icon2 from "../../asests/Icons/icon02.png";
import Icon3 from "../../asests/Icons/icon03.png";
import Icon4 from "../../asests/Icons/icon04.png";
import Icon5 from "../../asests/Icons/icon05.png";
import Icon6 from "../../asests/Icons/icon06.png";
import Icon7 from "../../asests/Icons/icon07.png";
import Icon8 from "../../asests/Icons/icon08.png";

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-template-rows: repeat(2, 280px);
  margin-top: 100px;
  gap: 70px;
`;
const GridItem = styled.div`
  border: 1px solid gray;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const GridIcon = styled.img`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
`;
const Wrapper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40%;
  margin-bottom: auto;
  left: 0;
  right: 0;
  text-align: center;
`;
const Num = styled.p`
  font-family: Lexend Deca;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  margin: 0px;
`;
const Title = styled.p`
  font-family: Lexend Deca;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  margin: 0px;
`;

const Icons = [
  { icon: Icon1, num: "01", title: "UI_UX DESIGN" },
  { icon: Icon2, num: "02", title: "DEVELOPMENT" },
  { icon: Icon3, num: "03", title: "BRANDING" },
  { icon: Icon4, num: "04", title: "MARKETING" },
  { icon: Icon5, num: "05", title: "IOS APPS" },
  { icon: Icon6, num: "06", title: "CUSTOM CMS" },
  { icon: Icon7, num: "07", title: "JAVA APPS" },
  { icon: Icon8, num: "08", title: "e-COMMERCE" },
];

const Featuredsection = () => {
  return (
    <Box
      sx={{
        margin: "20px 0px 100px 0px",
        width: "1310px",
        height: "850px",
        backgroundColor: "#282828",
        color: "#fff",
        padding: "140px 220px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Lexend Deca",
          fontSize: "17px",
          fontWeight: 600,
          lineHeight: "20px",
          letterSpacing: "2px",
        }}
      >
        FEATURED SERVICES
      </Typography>
      <Typography
        sx={{
          fontFamily: "Space Grotesk",
          fontSize: "20px",
          lineHeight: "30px",
          mt: 3,
        }}
      >
        We’re constantly refining our product. Adding new
        <br /> features. Working to help your business grow.
      </Typography>
      <GridBox>
        {Icons.map((item) => (
          <GridItem>
            <GridIcon src={item.icon} />
            <Wrapper>
              <Num>{item.num}</Num>
              <Title>{item.title}</Title>
            </Wrapper>
          </GridItem>
        ))}
      </GridBox>
    </Box>
  );
};

export default Featuredsection;
