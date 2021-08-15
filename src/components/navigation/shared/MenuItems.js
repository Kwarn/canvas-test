import React from "react";
import {
  StyledCallToActionButton,
  StyledMenuItem,
  StyledMenuItemsWrapper,
} from "./MenuItemsStyles";

export default function MenuItems() {
  return (
    <StyledMenuItemsWrapper>
      <StyledMenuItem>
        <h2>ABOUT</h2>
      </StyledMenuItem>
      <StyledMenuItem>
        <h2>SPONSORS</h2>
      </StyledMenuItem>
      <StyledCallToActionButton>
        <h2>BUY TICKETS</h2>
      </StyledCallToActionButton>
    </StyledMenuItemsWrapper>
  );
}
