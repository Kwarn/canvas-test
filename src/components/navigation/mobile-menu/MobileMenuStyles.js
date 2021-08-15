import styled from "styled-components";

export const StyledMobileMenuWrapper = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-size: cover;
  transition: top 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${(props) => (props.isMenuOpen ? "1" : "0")};
  top: ${(props) => (props.isMenuOpen ? "0px" : "-100vh")};
  background-image: ${(props) => `url(${props.background})`};
`;

export const StyledCloseIconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100%;
  display: flex;
  justify-content: right;
`;
