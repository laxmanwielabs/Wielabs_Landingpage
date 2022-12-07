import React from "react";
import styled from "styled-components";

const ContactBox = styled.div`
  width: 1750px;
  height: 860px;
  background-color: #282828;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 110px;
`;
const TopText = styled.p`
  font-family: Space Grotesk;
  font-size: 17px;
  font-weight: 700;
`;
const MiddleText = styled.p`
  font-family: Lexend Deca;
  font-size: 90px;
  font-weight: 900;
  line-height: 110px;
  margin: 0px;
`;
const Contact = styled.p`
  font-family: Space Grotesk;
  font-size: 17px;
  font-weight: 400;
  margin: 8px;
`;
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const Contactsection = () => {
  return (
    <>
      <ContactBox>
        <Wrapper>
          <TopText>WORK WITH PRO TEAM</TopText>
          <MiddleText>Would you like to have </MiddleText>
          <MiddleText>professional project? </MiddleText>
          <MiddleText> Let's talk about it!</MiddleText>
          <ContactDetails>
            <Contact>hire-us@agensy.com.ua</Contact>
            <Contact>Or</Contact>
            <Contact>+380 98 294 80 85</Contact>
          </ContactDetails>
        </Wrapper>
      </ContactBox>
    </>
  );
};

export default Contactsection;
