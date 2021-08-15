import React from "react";
import {
  StyledBurgerIcon,
  StyledCanvasLogo,
  StyledNavBarContainer,
  StyledNavBarWrapper,
} from "./NavBarStyles";
import canvasLogo from "../../../assets/Canvas_logo.png";

export default function NavBar() {
  const burgerMenuIcon = (
    <StyledBurgerIcon>
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
