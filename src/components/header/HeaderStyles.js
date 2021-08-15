import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-position: right;
`;
