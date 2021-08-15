import styled, { css } from "styled-components";

export const StyledMenuItemsWrapper = styled.div`
  font-family: "Righteous";
  width: 100%;
  margin: 15vh auto auto 15px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 670px) {
    flex-direction: row;
    margin: auto 0 auto auto;
  }
`;

const StyledMenuItemDefaults = css`
  cursor: pointer;
  display: flex;
  margin: 15px 20px;
  width: fit-content;
  h2 {
    font-size: 30px;
    margin: auto;
    color: white;
  }

  @media (min-width: 670px) {
    flex-direction: row;
    h2 {
      font-size: 20px;
    }
  }
`;

export const StyledMenuItem = styled.div`
  ${StyledMenuItemDefaults}
`;

export const StyledCallToActionButton = styled.div`
  ${StyledMenuItemDefaults}
  h2 {
    color: black;
  }
  height: 40px;
  padding: 10px;
  background-color: white;
  border-radius: 30px;
`;
