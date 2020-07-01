import React from "react";
import styled from "styled-components";
import Text from "../Atoms/Text";

const StyledFooterWrapper = styled.div`
  min-height: 50px;
  margin-top: 60px;
  padding: 5px 0;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
`;

const StyledTextWrapper = styled.div`
  width: ${({ theme }) => theme.mainWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Footer = () => (
  <StyledFooterWrapper>
    <StyledTextWrapper>
      <Text>Shop © 2020</Text>

      <Text>Designed by Andrzej</Text>
    </StyledTextWrapper>
  </StyledFooterWrapper>
);

export default Footer;
