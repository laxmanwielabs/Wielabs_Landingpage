import React from "react";
import styled from "styled-components";
import WielabsLogo from "../../asests/Images/Wielabslogo.png";

const BottomDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 0px 40px 80px;
`;
const CareerHeading = styled.p`
  font-family: Space Grotesk;
  font-size: 20px;
  font-weight: 400;
`;
const CareerInfo = styled.p`
  font-family: Lexend Deca;
  font-size: 63px;
  font-weight: 700;
  margin: 0px;
`;
const ApplyButton = styled.p`
  margin: 80px 0px;
  cursor: pointer;
  font-family: Lexend Deca;
  font-size: 20px;
  font-weight: 700;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 140px;
  margin-top: 28px;
`;
const Logo = styled.img`
  width: 240px;
  height: 90px;
  margin-right: 360px;
`;
const Title = styled.p`
  font-family: Lexend Deca;
  font-size: 20px;
  font-weight: 700;
  margin: 0px;
  line-height: 26px;
`;
const Details = styled.p`
  font-family: Space Grotesk;
  font-size: 20px;
  font-weight: 400;
  margin: 0px;
  line-height: 26px;
`;
const HelloInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 240px;
`;

const Footer = () => {
  return (
    <>
      <BottomDetails>
        <CareerHeading>CAREER OF AGENSY UKRAINE</CareerHeading>
        <CareerInfo>
          We allways looking for talented peoples, soo let’s
          <br /> work together
        </CareerInfo>
        <ApplyButton>APPLY NOW</ApplyButton>
        <Wrapper>
          <Logo src={WielabsLogo} />
          <Info>
            <Title>Location</Title>
            <Details>
              Studio Agensy
              <br />
              Kristiatik 15th Street, Floot 17
              <br />
              Kiev, Ukraine 78692
            </Details>
          </Info>
          <HelloInfo>
            <Title>Say Hello</Title>
            <Details>
              hello@agensy.com.ua <br />
              +380 98 294 80 86
              <br />
            </Details>
          </HelloInfo>
        </Wrapper>
      </BottomDetails>
    </>
  );
};

export default Footer;
