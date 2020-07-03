import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
import icon from "../../assets/shopping-cart.svg";

const StyledWrapper = styled.div`
  position: relative;
  min-height: 50px;
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavWrap = styled.div`
  display: flex;
  width: ${({ theme }) => theme.mainWidth};
`;

const StyledListWrapper = styled.div`
  display: flex;
  overflow: hidden;
  list-style-type: none;
  flex: 1;
`;

const StyledItemWrapper = styled.li`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.regular};
  padding: 15px 40px 15px 0;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }
`;

const StyledCartButtonWrapper = styled.div`
  align-self: center;
  display: flex;
`;

const Navigation = ({ cart }) => (
  <StyledWrapper>
    <StyledNavWrap>
      <StyledListWrapper>
        <StyledItemWrapper>
          <Link to="/">Home</Link>
        </StyledItemWrapper>
        <StyledItemWrapper>
          <Link to="/catalog">Catalog</Link>
        </StyledItemWrapper>
        <StyledItemWrapper>
          <Link to="/about">About</Link>
        </StyledItemWrapper>
      </StyledListWrapper>
      <StyledCartButtonWrapper>
        <Button cart src={icon} />
        <Text cart>{cart}</Text>
      </StyledCartButtonWrapper>
    </StyledNavWrap>
  </StyledWrapper>
);

export default Navigation;
