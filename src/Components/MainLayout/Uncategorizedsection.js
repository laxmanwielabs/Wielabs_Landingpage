import React from "react";
import styled from "styled-components";

const info = [
  {
    title: "development, security",
    desc: "Performed suspicion in certainty so frankness by attention pretended.",
    date: "13th January, 2022",
  },
  {
    title: "browser, creative",
    desc: "Three-piece set with  matching headband and knickers.",
    date: "13th January, 2022",
  },
  {
    title: "security, wordpress",
    desc: "Extremity excellent certainty discourse sincerity no he so resembled.",
    date: "13th January, 2022",
  },
];

const Fullsection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-family: Space Grotesk;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 30px;
`;
const Heading = styled.p`
  font-family: Lexend Deca;
  font-size: 77px;
  line-height: 75px;
  font-weight: 700;
  margin: 0px;
`;
const Date = styled.p`
  font-family: Lexend Deca;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 30px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottem: 120px;
`;
const Bottomdetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
  margin-bottom: 200px;
`;
const SingleBox = styled.div`
  dsplay: flex;
  flex-direction: column;
  width: 360px;
  justify-content: space-between;
  margin-right: 30px;
`;
const ContentTitle = styled.p`
  font-family: Space Grotesk;
  font-size: 17px;
  line-height: 20px;
`;
const Content = styled.p`
  font-family: Lexend Deca;
  font-size: 25px;
  line-height: 30px;
  font-weight: 500;
`;

const Uncategorizedsection = () => {
  return (
    <Fullsection>
      <Wrapper>
        <Title>Uncategorized</Title>
        <Heading>
          Fertile how old address did <br /> showing because sitting
        </Heading>
        <Date>13th March, 2022</Date>
      </Wrapper>

      <Bottomdetails>
        {info.map((item) => (
          <SingleBox>
            <ContentTitle>{item.title}</ContentTitle>
            <Content>{item.desc}</Content>
            <Date>{item.date}</Date>
            <hr />
          </SingleBox>
        ))}
      </Bottomdetails>
    </Fullsection>
  );
};

export default Uncategorizedsection;
