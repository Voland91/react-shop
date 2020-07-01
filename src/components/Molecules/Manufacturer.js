import React from "react";
import styled from "styled-components";
import Text from "../Atoms/Text";
import Input from "../Atoms/Input";

const StyledManufacturterhWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

const StyledFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

const Manufakturer = ({ filterFn }) => (
  <StyledManufacturterhWrapper>
    <Text bold>Manufacturer</Text>
    <StyledFilterWrapper>
      <Input
        radio
        type="radio"
        name="manufacturere"
        id="all"
        value=""
        onChange={filterFn}
        defaultChecked={true}
      />
      <Text>All</Text>
    </StyledFilterWrapper>
    <StyledFilterWrapper>
      <Input
        radio
        type="radio"
        name="manufacturere"
        id="apple"
        value="apple"
        onChange={filterFn}
      />
      <Text>Apple</Text>
    </StyledFilterWrapper>
    <StyledFilterWrapper>
      <Input
        radio
        type="radio"
        name="manufacturere"
        id="dell"
        value="dell"
        onChange={filterFn}
      />
      <Text>Dell</Text>
    </StyledFilterWrapper>
  </StyledManufacturterhWrapper>
);

export default Manufakturer;
