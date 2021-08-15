import React from "react";
import { StyledHeaderWrapper } from "./HeaderStyles";
import backgroundImage from "../../assets/Header_bg.jpg";

export default function Header() {
  return (
    <StyledHeaderWrapper background={backgroundImage}></StyledHeaderWrapper>
  );
}
