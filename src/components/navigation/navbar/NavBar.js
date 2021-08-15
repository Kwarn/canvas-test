import React from "react";
import {
  StyledBurgerIcon,
  StyledCanvasLogo,
  StyledNavBarContainer,
  StyledNavBarWrapper,
} from "./NavBarStyles";
import canvasLogo from "../../../assets/Canvas_logo.png";

export default function NavBar({ openMobileMenuCb }) {
  const burgerMenuIcon = (
    <StyledBurgerIcon onClick={openMobileMenuCb}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurgerIcon>
  );

  return (
    <StyledNavBarWrapper>
      <StyledNavBarContainer>
        <StyledCanvasLogo src={canvasLogo} alt="canvas logo" />
        {burgerMenuIcon}
      </StyledNavBarContainer>
    </StyledNavBarWrapper>
  );
}
