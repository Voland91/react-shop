import React from "react";
import styled from "styled-components";
import Search from "../Molecules/Search";
import Manufacturer from "../Molecules/Manufacturer";

const StyledFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px 20px;
  background-color: ${({ theme }) => theme.lightBrown};
`;

const Filter = ({ searchFn, clearFn, value, filterFn }) => (
  <StyledFilterWrapper>
    <Search searchFn={searchFn} clearFn={clearFn} value={value} />
    <Manufacturer filterFn={filterFn} />
  </StyledFilterWrapper>
);

export default Filter;
