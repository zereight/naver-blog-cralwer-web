import React, { useState } from "react";
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

const Button = styled.button`
  height: 80%;
  width: fit-content(20em);
  margin-right: 10px;
`;

function Main() {
  const [word, setWord] = useState("");

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setWord(value);
  };

  const onClick = (e) => {
    console.log(word);
  };

  return (
    <Container>
      <MainGuide>
        <MainGuideText>Make a your wordCloud</MainGuideText>
        <TermInputContainer>
          <TermInput placeholder="Search..." onChange={onChange} value={word} />
          <Button onClick={onClick}>Search</Button>
        </TermInputContainer>
      </MainGuide>
    </Container>
  );
}

export default Main;
