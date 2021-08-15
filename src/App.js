import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import NavBar from "./components/navigation/navbar/NavBar";
import MobileMenu from "./components/navigation/mobile-menu/MobileMenu";

const StyledAppWrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <StyledAppWrapper className="App">
      <MobileMenu />
      <NavBar />
      <Header />
    </StyledAppWrapper>
  );
}

export default App;
