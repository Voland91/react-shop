import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from '../Atoms/Image';

const StyledImageWrapper = styled.div`
  overflow: hidden;
  height: 120px;
  width: 120px;
`;

const CartItem = ({ image, manufacture, name }) => (
  <>
    <StyledImageWrapper>
      <Image cart src={image} alt={`${manufacture} ${name}`} />
    </StyledImageWrapper>
  </>
);

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  manufacture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CartItem;
