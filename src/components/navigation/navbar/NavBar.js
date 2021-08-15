import React, { useState, useEffect } from "react";
import MenuItems from "../shared/MenuItems";
import {
  StyledBurgerIcon,
  StyledCanvasLogo,
  StyledNavBarContainer,
  StyledNavBarWrapper,
} from "./NavBarStyles";
import canvasLogo from "../../../assets/Canvas_logo.png";

export default function NavBar({ openMobileMenuCb }) {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  const resizeHandler = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

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
        {windowInnerWidth < 670 ? burgerMenuIcon : <MenuItems />}
      </StyledNavBarContainer>
    </StyledNavBarWrapper>
  );
}
