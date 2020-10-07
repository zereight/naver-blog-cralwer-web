import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainGuide = styled.div`
  width: 500px;
  height: 500px;
  background-color: #37ace3;
  border-radius: 50%;
`;

const MainGuideText = styled.span`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const TermInputContainer = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const TermInput = styled.input`
  width: 90%;
  height: 80%;
  border: none;
`;

function Main() {
  return (
    <Container>
      <MainGuide>
        <MainGuideText>Make a your wordCloud</MainGuideText>
        <TermInputContainer>
          <TermInput placeholder="Search..." />
        </TermInputContainer>
      </MainGuide>
    </Container>
  );
}

export default Main;
