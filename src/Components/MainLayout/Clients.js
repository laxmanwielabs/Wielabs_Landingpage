import React from "react";
import styled from "styled-components";
import Client1 from "../../asests/Images/clientslogo01.png";
import Client2 from "../../asests/Images/clientslogo02.png";
import Client3 from "../../asests/Images/clientslogo03.png";
import Client4 from "../../asests/Images/clientslogo04.png";
import Client5 from "../../asests/Images/clientslogo05.png";
import Client6 from "../../asests/Images/clientslogo06.png";
import Client7 from "../../asests/Images/clientslogo07.png";
import Client8 from "../../asests/Images/clientslogo08.png";
import Client9 from "../../asests/Images/clientslogo09.png";
import Client10 from "../../asests/Images/clientslogo10.png";
import Client11 from "../../asests/Images/clientslogo11.png";
import Client12 from "../../asests/Images/clientslogo12.png";
import Client13 from "../../asests/Images/clientslogo13.png";
import Client14 from "../../asests/Images/clientslogo14.png";
import Client15 from "../../asests/Images/clientslogo15.png";

const ClientLogos = [
  { img: Client1 },
  { img: Client2 },
  { img: Client3 },
  { img: Client4 },
  { img: Client5 },
  { img: Client6 },
  { img: Client7 },
  { img: Client8 },
  { img: Client9 },
  { img: Client10 },
  { img: Client11 },
  { img: Client12 },
  { img: Client13 },
  { img: Client14 },
  { img: Client15 },
];

const ClientsSection = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
`;
const Title = styled.p`
  font-family: Lexend Deca;
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
`;

const Description = styled.p`
  font-family: Lexend Deca;
  font-size: 18px;
  line-height: 20px;
  margin: 5px 0px;
  font-weight: 300;
`;
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 319px);
  grid-template-rows: repeat(3, 200px);
  margin: 100px 80px;
  border: 0.2px solid grey;
`;
const GridItem = styled.div`
  border: 0.2px solid gray;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Logo = styled.img`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
`;

const Clients = () => {
  return (
    <ClientsSection>
      <Wrapper>
        <Title>SELECTED CLIENTS</Title>
        <Description>
          We’re constantly refining our product. Adding new features.
        </Description>
        <Description>Working to help your business grow.</Description>
      </Wrapper>
      <GridBox>
        {ClientLogos.map((item) => (
          <GridItem>
            <Logo src={item.img} />
          </GridItem>
        ))}
      </GridBox>
    </ClientsSection>
  );
};

export default Clients;
