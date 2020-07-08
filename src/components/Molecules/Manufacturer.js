import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../Atoms/Text';
import Input from '../Atoms/Input';

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

const Manufakturer = ({ filterFn, products }) => (
  <StyledManufacturterhWrapper>
    <Text bold>Manufacturer</Text>
    <StyledFilterWrapper>
      <Input
        radio
        type="radio"
        name="manufacture"
        id="all"
        value=""
        onChange={filterFn}
        defaultChecked
      />
      <Text>All</Text>
    </StyledFilterWrapper>
    {products.map(
      (item) =>
        item.featured && (
          <StyledFilterWrapper key={item.id}>
            <Input
              radio
              type="radio"
              name="manufacture"
              id={item.manufacture}
              value={item.manufacture}
              onChange={filterFn}
            />
            <Text>{item.manufacture}</Text>
          </StyledFilterWrapper>
        ),
    )}
  </StyledManufacturterhWrapper>
);

Manufakturer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
  filterFn: PropTypes.func.isRequired,
};

export default Manufakturer;
