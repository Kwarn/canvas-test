import React from "react";
import {
  StyledCloseIconContainer,
  StyledMobileMenuWrapper,
} from "./MobileMenuStyles";
import mobileMenuBackground from "../../../assets/Grad_Bg.png";
import { ReactComponent as MobileMenuCloseIcon } from "../../../assets/mobileMenuCloseIcon.svg";

export default function MobileMenu({ isMobileMenuOpen, closeMobileMenuCb }) {
  return (
    <StyledMobileMenuWrapper
      isMenuOpen={isMobileMenuOpen}
      background={mobileMenuBackground}
    >
      <StyledCloseIconContainer>
        <MobileMenuCloseIcon onClick={closeMobileMenuCb} />
      </StyledCloseIconContainer>
    </StyledMobileMenuWrapper>
  );
}
