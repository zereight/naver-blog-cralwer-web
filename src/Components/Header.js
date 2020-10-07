import React from "react";
import styled from "styled-components";

const MainNav = styled.nav`
  width: 100%;
  height: 7vh;
  background-color: #242a2e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div``;

const LogoTexts = styled.div`
  font-size: 2em;
  color: white;
  display: flex;
`;

const LogoText = styled.span`
  font-weight: 900;
`;

function Header() {
  return (
    <MainNav>
      <Logo>
        <LogoTexts>
          <LogoText>W</LogoText>
          <LogoText>o</LogoText>
          <LogoText>r</LogoText>
          <LogoText>d</LogoText>
          <LogoText>C</LogoText>
          <LogoText>l</LogoText>
          <LogoText>o</LogoText>
          <LogoText>u</LogoText>
          <LogoText>d</LogoText>
          &nbsp;
          <LogoText>M</LogoText>
          <LogoText>a</LogoText>
          <LogoText>k</LogoText>
          <LogoText>e</LogoText>
          <LogoText>r</LogoText>
        </LogoTexts>
      </Logo>
    </MainNav>
  );
}

export default Header;
