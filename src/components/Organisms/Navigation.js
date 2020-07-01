import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavWrapper = styled.div`
  position: relative;
  min-height: 50px;
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  justify-content: center;
`;

const StyledListWrapper = styled.ul`
  display: flex;
  width: ${({ theme }) => theme.mainWidth};
  overflow: hidden;
  list-style-type: none;
`;

const StyledItemWrapper = styled.li`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.regular};
  padding: 15px 35px;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }
`;

const Navigation = () => (
  <StyledNavWrapper>
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
  </StyledNavWrapper>
);

export default Navigation;
