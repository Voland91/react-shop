import React from "react";
import styled from "styled-components";
import Text from "../Atoms/Text";
import Button from "../Atoms/Button";
import TextInput from "../Atoms/Input";

const StyledSearchWrapper = styled.div`
  margin-top: 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledTextWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Search = ({ searchFn, clearFn, value }) => (
  <StyledSearchWrapper>
    <StyledTextWrapper>
      <Text bold>Search</Text>
      <Button onClick={clearFn}>Clear</Button>
    </StyledTextWrapper>
    <TextInput
      type="text"
      placeholder="search..."
      onChange={searchFn}
      value={value}
    />
  </StyledSearchWrapper>
);

export default Search;
