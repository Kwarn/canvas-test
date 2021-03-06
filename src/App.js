import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import NavBar from "./components/navigation/navbar/NavBar";
import MobileMenu from "./components/navigation/mobile-menu/MobileMenu";

const StyledAppWrapper = styled.div`
  width: 100%;
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <StyledAppWrapper className="App">
      <NavBar openMobileMenuCb={() => setIsMobileMenuOpen(true)} />

      <MobileMenu
        closeMobileMenuCb={() => setIsMobileMenuOpen(false)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <Header />
    </StyledAppWrapper>
  );
}

export default App;
