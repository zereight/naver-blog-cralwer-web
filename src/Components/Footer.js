import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #242a2e;
  padding-top: 20px;
  font-size: 1em;
`;

const InfoContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoText = styled.span``;

const CopyRightText = styled.span`
  margin-top: 15px;
`;

function Footer() {
  return (
    <Container>
      <InfoContainer>
        <InfoText>Blog : zereight.tistory.com</InfoText>
        <InfoText>Github : github.com/zereight</InfoText>
        <CopyRightText>&copy; Zereight all reserved</CopyRightText>
      </InfoContainer>
    </Container>
  );
}

export default Footer;
