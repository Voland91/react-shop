import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Search from '../Molecules/Search';
import Manufacturer from '../Molecules/Manufacturer';

const StyledFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px 20px;
  background-color: ${({ theme }) => theme.lightBrown};
`;

const Filter = ({ searchFn, clearFn, value, filterFn, products }) => (
  <StyledFilterWrapper>
    <Search searchFn={searchFn} clearFn={clearFn} value={value} />
    <Manufacturer filterFn={filterFn} products={products} />
  </StyledFilterWrapper>
);

Filter.propTypes = {
  searchFn: PropTypes.func.isRequired,
  clearFn: PropTypes.func.isRequired,
  filterFn: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
