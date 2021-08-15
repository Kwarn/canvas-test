import React from "react";
import {
  LeftContentBlock,
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledDescription,
  StyledTitle,
  TimeDateInfoContainer,
  RightContentBlock,
} from "./HeaderStyles";
import backgroundImage from "../../assets/Header_bg.jpg";
import ticketImage from "../../assets/Ticket.png";
import { ReactComponent as XIcon } from "../../assets/X Icon-1.svg";
import { ReactComponent as Calendar } from "../../assets/Calendar.svg";
import { ReactComponent as Pin } from "../../assets/Pin.svg";

export default function Header() {
  return (
    <StyledHeaderWrapper background={backgroundImage}>
      <StyledHeaderContainer>
        <LeftContentBlock>
          <XIcon />
          <StyledTitle>INSIDER STORIES FROM PRODUCT PEOPLE</StyledTitle>
          <StyledDescription>
            A single-day digital product and experience conference sharing
            actionable insights from makers, to makers.
          </StyledDescription>
          <TimeDateInfoContainer>
            <div>
              <Calendar style={{ minWidth: "50px" }} />
              <h2>8th October 2021</h2>
            </div>
            <div>
              <Pin style={{ minWidth: "50px" }} />
              <h2>Cineworld, Birmingham Venue takeover</h2>
            </div>
          </TimeDateInfoContainer>
        </LeftContentBlock>
        <RightContentBlock>
          <img src={ticketImage}></img>
        </RightContentBlock>
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
}
