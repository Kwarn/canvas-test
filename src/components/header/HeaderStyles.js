import styled, { css, keyframes } from "styled-components";

const leftContentOnLoadAnimation = keyframes`
  0% {
    margin-left: -100px;
    opacity: 0;
  }
  100% {
    margin-left: 20px;
    opacity: 1;
  }

`;

const rightContentOnLoadAnimation = keyframes`
  0% {
    margin-right: -100px;
    opacity: 0;
  }
  100% {
    margin-right: 20px;
    opacity: 1;
  }
`;

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-position: right;
  /* overflow: hidden; */
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 20px;

  @media (min-width: 670px) {
    max-width: 1200px;
    flex-direction: row;
    margin: auto;
    justify-content: center;
  }
`;

const ContentBlock = css`
  // margin offset to accomodate absolute positioned navbar
  margin: 20vh 20px auto auto;
  color: white;
  width: 100%;
  height: auto;
  font-family: "Righteous";
  @media (min-width: 670px) {
    max-width: 50%;
    margin: 25vh auto 0 auto;
  }
`;

export const LeftContentBlock = styled.div`
  ${ContentBlock}

  opacity: 0;
  animation-name: ${leftContentOnLoadAnimation};
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  display: flex;
  flex-direction: column;
  @media (min-width: 670px) {
    max-width: 600px;
    margin: 25vh auto auto 20px;
  }
`;

export const StyledTitle = styled.h2`
  margin: 15px auto;
  word-wrap: wrap;
  font-size: 40px;
  font-weight: bolder;
`;

export const StyledDescription = styled.p`
  margin: 20px auto;
  font-size: 22px;
  line-height: 25px;
`;

export const TimeDateInfoContainer = styled.div`
  div {
    margin: 25px auto auto 0;
    display: flex;
    flex-direction: row;
    h2 {
      margin: auto 10px;
    }
  }
  margin: 25px auto auto 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
`;

export const RightContentBlock = styled.div`
  ${ContentBlock}

  opacity: 0;
  animation-name: ${rightContentOnLoadAnimation};
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;

  img {
    display: block;
    width: 100%;
    height: auto;
    margin: auto;

    @media (min-width: 670px) {
      max-width: 400px;
      margin-right: 0;
    }
  }

  @media (min-width: 670px) {
    margin-right: 20px;
  }
`;
