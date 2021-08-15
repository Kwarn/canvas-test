import styled, { css } from "styled-components";

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
    margin: 20vh auto 0 auto;
  }
`;

export const LeftContentBlock = styled.div`
  ${ContentBlock}
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  @media (min-width: 670px) {
    margin: 20vh auto auto 20px;
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
  img {
    display: block;
    width: 100%;
    height: auto;
    margin: auto;

    @media (min-width: 670px) {
      max-width: 400px;
      margin: auto 20px auto auto;
    }
  }
`;
