import styled, { keyframes } from "styled-components";

const onLoadAnimation = keyframes`
  0% {
    top: -10vh;
  }
  100% {
    top: 15px;
  }
`;

export const StyledNavBarWrapper = styled.div`
  top: -20vh;
  position: absolute;
  animation-name: ${onLoadAnimation};
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  height: 140px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
`;

export const StyledNavBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 1200px;
`;

export const StyledCanvasLogo = styled.img`
  cursor: pointer;
  margin: auto auto auto 25px;
  height: 80px;
  width: auto;
  object-fit: cover;
`;

export const StyledBurgerIcon = styled.div`
  margin: auto 25px auto auto;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    margin: 2px auto;
    width: 25px;
    height: 4px;
    background-color: black;
  }
`;
