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

const Manufakturer = ({ filterFn, products }) => {
  const manufactures = [
    ...new Set(products.map((item) => (item.featured ? item.manufacture : null))),
  ];

  return (
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
      {manufactures.map(
        (item) =>
          item !== null && (
            <StyledFilterWrapper key={item.id}>
              <Input
                radio
                type="radio"
                name="manufacture"
                id={item}
                value={item}
                onChange={filterFn}
              />
              <Text>{item}</Text>
            </StyledFilterWrapper>
          ),
      )}
    </StyledManufacturterhWrapper>
  );
};

Manufakturer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
  filterFn: PropTypes.func.isRequired,
};

export default Manufakturer;
