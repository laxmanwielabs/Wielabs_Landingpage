import React from "react";
import styled from "styled-components";
import Awardimg1 from "../../asests/Images/awards01.png";
import Awardimg2 from "../../asests/Images/awards02.png";
import Awardimg3 from "../../asests/Images/awards03.png";
import Awardimg4 from "../../asests/Images/awards04.png";
import Awardimg5 from "../../asests/Images/awards05.png";

const AwardInfo = [
  {
    img: Awardimg1,
    name: "CSS Design Award",
    about: "Site of the day",
    count: "4",
  },
  { img: Awardimg2, name: "FWA Award", about: "Honorable Mention", count: "9" },
  {
    img: Awardimg3,
    name: "Web Design Award",
    about: "Selected Web",
    count: "6",
  },
  { img: Awardimg4, name: "W3 Award", about: "Site of the day", count: "2" },
  { img: Awardimg5, name: "Selected Web", about: "Web of week", count: "7" },
];

const AwardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainTitle = styled.p`
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing; 2px;
  text-align: center;
`;
const Content = styled.p`
  font-family: Space Grotesk;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin: 0px;
`;
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 280px);
  justify-content: center;
  spacing: 200px;
  text-align: center;
  margin: 100px 0px;
`;
const GridItem = styled.div``;
const GridIcon = styled.img`
  margin-bottom: 30px;
  width: 100px;
  height: 100px;
`;
const AwardTitle = styled.p`
  font-family: Lexend Deca;
  font-size: 20px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`;
const About = styled.p`
  font-family: Space Grotesk;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: rgba(40, 40, 40, 0.6);
`;
const AwardCount = styled.p`
  font-family: Lexend Deca;
  font-size: 60px;
  font-weight: 900;
  line-height: 60px;
  text-align: center;
  margin: 0px;
`;
const ShowreelBox = styled.div`
  width: 1750px;
  height: 1050px;
  background-color: #282828;
  color: #fff;
  margin-bottom: 150px;
  margin-top: 100px;
`;
const Text = styled.p`
  text-align: center;
  margin-top: 440px;
  font-family: Lexend Deca;
  font-weight: 900;
  font-size: 60px;
  line-height: 200px;
`;

const Awards = () => {
  return (
    <AwardContainer>
      <Wrapper>
        <MainTitle>AWARDS & PRIZES</MainTitle>
        <Content>
          We’re constantly refining our product. Adding new features. Working to
        </Content>
        <Content>help your business grow.</Content>
      </Wrapper>
      <GridBox>
        {AwardInfo.map((item) => (
          <GridItem>
            <GridIcon src={item.img} />
            <AwardTitle>{item.name}</AwardTitle>
            <About>{item.about}</About>
            <AwardCount>{item.count}</AwardCount>
          </GridItem>
        ))}
      </GridBox>
      <ShowreelBox>
        <Text>SHOW REEL</Text>
      </ShowreelBox>
    </AwardContainer>
  );
};

export default Awards;
